'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Client, Account, Models } from 'appwrite';
import { GoogleAuthContextType, userInfoByGoogle } from '@/types/contexts';

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

    const loadingGetUser = UseBoolean(true)

    const [userInfo, setUserInfo] = useState<userInfoByGoogle>({
        userId: null,
        username: '',
        email: '',
        email_name: '',
        createdAt: '',
    })

    useEffect(() => {
        console.log(loadingGetUser.value)
    }, [loadingGetUser.value])
    
    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if(googleUserInfo.email) getUserFromDb()
    }, [googleUserInfo.email])

    const getUserFromDb = async() => {
        loadingGetUser.setTrue()
        try {
            const response = await fetch('/api/users/get-user/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: googleUserInfo.email,
                    provider: 'google',
                })
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
        <GoogleAuthContext.Provider value={{ provider :'google', userInfo, googleUserInfo, getUser, googleLogOut, getJwtToken, loadingGetUser }}>
            {children}
        </GoogleAuthContext.Provider>
    )
}
