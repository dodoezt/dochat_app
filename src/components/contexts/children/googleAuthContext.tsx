'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Client, Account, Models } from 'appwrite';
import { GoogleAuthContextType } from '@/types/contexts';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const GoogleAuthContext = createContext<GoogleAuthContextType | null>(null);

export const useGoogleAuth = () => useContext(GoogleAuthContext) as GoogleAuthContextType;

export const GoogleAuthProvider = ({ children } : any) => { 
    const [googleUserInfo, setGoogleUserInfo] = useState({
        username: '',
        email: '',
    })

    const getUser = async () => {
        try {
            const user = await account.get();
            setGoogleUserInfo({
                username: user.name,
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

    useEffect(() => {
        console.log(googleUserInfo)
    }, [googleUserInfo])

    return (
        <GoogleAuthContext.Provider value={{ provider :'google', googleUserInfo, getUser, googleLogOut, getJwtToken }}>
            {children}
        </GoogleAuthContext.Provider>
    )
}
