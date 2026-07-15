'use client'
import React, { createContext, useContext, useEffect, useState, useRef, useMemo } from 'react';
import { Client, Account, Models } from 'appwrite';
import { AuthContextType, friendshipsType, requesterConnectionsType } from '@/types/contexts';
import { UserInfoType } from '@/types/user';
import socket from '@/lib/socket';
import Notification from '@/components/mini-components/notification';

import { UseBoolean } from '@/hooks/useBoolean';
import { redis } from '@/lib/caches/RedisCaches';
import { getRedis, setRedis } from '@/functions/redis/redisFunctions';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const AuthContext = createContext<any>(null);

export const useAuthContext = () => useContext(AuthContext) as AuthContextType;

const testNotifications = [
    {
        type: 'friend-request',
        friendshipId: 99,
        from: {
            userId: 9,
            username: 'nero',
            pfp_id: '686523f10025e35c2dd6'
        },
        title: `New Friend Request`,
    },
    {
        type: 'friend-request',
        friendshipId: 100,
        from: {
            userId: 12,
            username: 'alldo uncut',
            pfp_id: '6880b6bd002fd13db081'
        },
        title: `New Friend Request`,
    }
]

export const AuthProvider = ({ children } : any) => { 
    const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)
    const loadingGetUser = UseBoolean(true)
    const loadingServer = UseBoolean(true)

    const hasConnected = useRef(false);
    const [onlineUsers, setOnlineUsers] = useState<any[]>([]);
    const [notifications, setNotifications] = useState<any[]>([]);
    const [newFriendRequests, setNewFriendRequests] = useState<requesterConnectionsType[]>([]);
    const [friendships, setFriendships] = useState<friendshipsType[] | null>(null);

    const connectToSocket = () => {
        if (!userInfo) return
        if (hasConnected.current) return;
        loadingServer.setTrue();

        try {
            const userId = userInfo?.userId;
            console.log(userId)

            if (!socket.connected) socket.connect();
            if (userId) socket.emit('user:register', userId);
            socket.emit('message:receive:new', {userId})

        } catch (error) {
            console.log('Error fetching user ID:', error);
            if (!socket.connected) socket.connect();
        } finally {
            hasConnected.current = true;
            loadingServer.setFalse();
        }
    };

    function getIsLoggedCookie() {
        if (typeof document === 'undefined') return null;
        const match = document.cookie
            .split('; ')
            .find(row => row.startsWith('isLogged='))
            ?.split('=')[1];

        if (match === 'true') return true;
        if (match === 'false') return false;
    }
    
    const getUserFromDb = async() => {
        const isLogged = getIsLoggedCookie();
        if(!isLogged) return
        loadingGetUser.setTrue()
        try {
            const response = await fetch('/api/v1/users/me', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })

            const { user } = await response.json()
            setUserInfo(user)
        } catch (error) {
            console.log('failed to fetch user')
            setUserInfo(null);
        } finally {
            loadingGetUser.setFalse();
            connectToSocket()
        }
    }   

    const getFriendShips = async() => {
        try {
            const response = await fetch('/api/v1/users/me/friendships')
            const data = await response.json()
    
            setFriendships(data)
        } catch (error) {
            console.log()
            setFriendships(null)
        }
    }
    
    const getOauthJwtToken = async () => {
        const jwt = await account.createJWT();
        return jwt;
    }

    const friendConnections = useMemo(() => {
        if(!friendships || !userInfo) return []
        return friendships
            .filter(friendship => friendship.status === 'accepted')
            .map(friendship => {
                if (friendship.userId === userInfo.userId) {
                    return {
                        friendshipId: friendship.id,
                        friend: friendship.users_friendships_friendIdTousers
                    }
                } else if (friendship.friendId === userInfo.userId) {
                    return {
                        friendshipId: friendship.id,
                        friend: friendship.users_friendships_userIdTousers
                    }
                } 
                return null
            })
            .filter(Boolean)
    }, [friendships, userInfo])

    const requesterConnections = useMemo(() => {
        if(!friendships || !userInfo) return []
        return friendships
            .filter(friendship => friendship.status === 'pending')
            .map(friendship => {
                if (friendship.userId === userInfo.userId) {
                    return null
                } else if (friendship.friendId === userInfo.userId) {
                    return {
                        friendshipId: friendship.id,
                        requester: friendship.users_friendships_userIdTousers
                    }
                } 
                return null
            })
            .filter(Boolean)
    }, [friendships, userInfo])

    // TESTING USEEFFECT
    useEffect(() => {
        console.log('friendships:', friendships);
    }, [friendships])

    useEffect(() => {
        console.log('notifications:', notifications);
    }, [notifications])
    // TESTING USEEFFECT

    useEffect(() => {
        getUserFromDb()
        getFriendShips()
    }, [])

    useEffect(() => {
        if(userInfo) {
            connectToSocket()
            socket.on('friend:request:received', ({type, friendshipId, from, createdAt}) => {
                const newNotification = {
                    type,
                    friendshipId,
                    from: {
                        userId: from.userId,
                        username: from.username,
                        user_atribut: {
                            pfp_id: from.user_atribut.pfp_id
                        }
                    },
                    title: `New Friend Request`,
                }
                setNotifications((prev) => [...prev, newNotification]);
                setNewFriendRequests((prev) => [...prev, {
                    friendshipId: friendshipId,
                    requester : {
                        userId: from.userId,
                        username: from.username,
                        user_atribut: {
                            pfp_id: from.user_atribut.pfp_id
                        }
                    }
                }])
            })

            socket.on('message:notification', ({ id, type, conversationId, from, content}) => {
                const newNotification = {
                    msgId : id,
                    type,
                    conversationId,
                    from: {
                        userId: from.senderId,
                        username: from.senderUsername,
                        user_atribut: {
                            pfp_id: from.senderPfp_id
                        }
                    },
                    content,
                }
                setNotifications((prev) => [...prev, newNotification]);
            })
        }

        return () => {
            socket.off('friend:request:received');
            socket.off('message:notification');
        }
    }, [userInfo])
    
    useEffect(() => {
        socket.on("user:list", (users) => {
            setOnlineUsers(users); // isi semua online users saat pertama daftar
        });
    
        socket.on("user:connected", (user) => {
            setOnlineUsers((prev: any) => [...prev, user]); // tambahin user yang baru online
        });
    
        socket.on("user:disconnected", ({ userId }) => {
            setOnlineUsers((prev: any) => prev.filter((u: any) => u.userId !== userId)); // hapus yang disconnect
        });

        return () => {
            socket.off('user:list')
            socket.off('user-connected')
            socket.off('user:disconnected')
        }
    }, [])

    useEffect(() => {
        console.log('userInfo:', userInfo);
    }, [userInfo])

    useEffect(() => {
        console.log('friendships:', friendships);
    }, [friendships])

    if (loadingServer.value && userInfo) return null
    
    return (
        <AuthContext.Provider value={{ userInfo, setUserInfo, getOauthJwtToken, loadingGetUser, onlineUsers, loadingServer, friendships, setFriendships, friendConnections, requesterConnections, newFriendRequests }}>
            {notifications.length > 0 && <Notification queues={notifications} setNotifications={setNotifications}/>}
            {children}
        </AuthContext.Provider>
    )
}
