'use client'
import React, { createContext, useContext, useEffect, useState, useRef } from 'react';
import { Client, Account, Models } from 'appwrite';
import { GoogleAuthContextType, userInfoByGoogle } from '@/types/contexts';
import socket from '@/lib/socket';

import { UseBoolean } from '@/hooks/useBoolean';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const GoogleAuthContext = createContext<GoogleAuthContextType | null>(null);

export const useGoogleAuth = () => useContext(GoogleAuthContext) as GoogleAuthContextType;

export const GoogleAuthProvider = ({ children } : any) => { 
    const [googleUserInfo, setGoogleUserInfo] = useState({
        email_name: '',
        email: '',
    })
    const [userInfo, setUserInfo] = useState<userInfoByGoogle | null>(null)
    const loadingGetUser = UseBoolean(true)

    const hasConnected = useRef(false);
    const [onlineUsers, setOnlineUsers] = useState<any[] | null>(null);

    useEffect(() => {
        console.log(loadingGetUser.value)
    }, [loadingGetUser.value])
    
    useEffect(() => {
        getUserFromDb()
    }, [])

    const connectToSocket = async() => {
        console.log('SocketProvider mounted');
        
        try {
            const response = await fetch('/api/user/userId', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
        });
        
        if (response.ok) {
            const data = await response.json();
            
            if (!hasConnected.current){
                if(!socket.connected) socket.connect();
                socket.emit('register', data.userId);
                hasConnected.current = true;
            }

        } else {
            console.error('Failed to fetch user ID');
        }
        } catch (error) {
            console.log('Error fetching user ID:', error);
        }
    }

    useEffect(() => {
        connectToSocket()
    }, [])

    useEffect(() => {
        socket.on("receive-online-users", (users) => {
            setOnlineUsers(users); // isi semua online users saat pertama daftar
        });

        socket.on("user-connected", (user) => {
            setOnlineUsers((prev: any) => [...prev, user]); // tambahin user yang baru online
        });

        socket.on("user-disconnected", ({ userId }) => {
            setOnlineUsers((prev: any) => prev.filter(u => u.userId !== userId)); // hapus yang disconnect
        });

    }, [])

    // useEffect(() => {
    //     if(googleUserInfo.email) getUserFromDb()
    // }, [googleUserInfo.email])

    const getUserFromDb = async() => {
        loadingGetUser.setTrue()
        try {
            const response = await fetch('/api/users/get-user/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    provider: 'google',
                }),
                credentials: 'include'
            })

            const { user } = await response.json()
            setUserInfo(user)

        } catch (error) {
            console.log('failed to fetch user')
        } finally {
            loadingGetUser.setFalse();
        }
    }   

    const getUser = async () => {
        try {
            const user = await account.get();
            setGoogleUserInfo({
                email_name: user.name,
                email: user.email,
            })
        } catch (error) {
            console.log('error:', error);
        }
    }

    const googleLogOut = async () => {
        try {
            await account.deleteSession('current');
        } catch (error) {
            console.log('error:', error);
        }
    }

    const getJwtToken = async () => {
        const jwt = await account.createJWT();
        return jwt;
    }

    return (
        <GoogleAuthContext.Provider value={{ provider :'google', userInfo: userInfo!, googleUserInfo, getUser, googleLogOut, getJwtToken, loadingGetUser, onlineUsers }}>
            {children}
        </GoogleAuthContext.Provider>
    )
}
