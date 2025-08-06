'use client'
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Client, Account, Models } from 'appwrite';
import { AuthContextType, userInfoByGoogle } from '@/types/contexts';
import socket from '@/lib/socket';

import { UseBoolean } from '@/hooks/useBoolean';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const AuthContext = createContext<any>(null);

export const useAuthContext = () => useContext(AuthContext) as AuthContextType;

export const AuthProvider = ({ children } : any) => { 
    const [userInfo, setUserInfo] = useState<userInfoByGoogle | null>(null)
    const loadingGetUser = UseBoolean(true)
    const loadingServer = UseBoolean(true)

    const hasConnected = useRef(false);
    const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

    const connectToSocket = () => {
        if (!userInfo) return
        if (hasConnected.current) return;
        loadingServer.setTrue();

        try {
            const userId = userInfo?.userId;
            console.log(userId)

            if (!socket.connected) socket.connect();
            if (userId) socket.emit('register', userId);
            socket.emit('receive-new-messages', {userId})

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
    
    const getOauthJwtToken = async () => {
        const jwt = await account.createJWT();
        return jwt;
    }

    // TESTING USEEFFECT
    useEffect(() => {
        console.log('onlineUsers:', onlineUsers);
    }, [onlineUsers])
    // TESTING USEEFFECT

    useEffect(() => {
        getUserFromDb()
    }, [])

    useEffect(() => {
        if(userInfo) connectToSocket()
    }, [userInfo])
    
    useEffect(() => {
        socket.on("receive-online-users", (users) => {
            setOnlineUsers(users); // isi semua online users saat pertama daftar
        });
    
        socket.on("user-connected", (user) => {
            setOnlineUsers((prev: any) => [...prev, user]); // tambahin user yang baru online
        });
    
        socket.on("user-disconnected", ({ userId }) => {
            setOnlineUsers((prev: any) => prev.filter((u: any) => u.userId !== userId)); // hapus yang disconnect
        });

        return () => {
            socket.off('receive-online-users')
            socket.off('user-connected')
            socket.off('user-disconnected')
        }
    }, [])

    useEffect(() => {
        console.log('userInfo:', userInfo);
    }, [userInfo])

    if (loadingServer.value && userInfo){
        return null;
    }
    
    return (
        <AuthContext.Provider value={{ userInfo, getOauthJwtToken, loadingGetUser, onlineUsers, loadingServer }}>
            {children}
        </AuthContext.Provider>
    )
}
