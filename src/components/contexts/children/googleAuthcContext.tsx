'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Client, Account, Models } from 'appwrite';

export type UserInfo = {
    username: string;
    email: string;
}

type GoogleAuthContextType = {
    userInfo: UserInfo;
    getUser: () => Promise<void>;
    googleLogOut: () => Promise<void>;
    loginWithGoogle: () => void;
    getJwtToken: () => Promise<Models.Jwt>;
}

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const GoogleAuthContext = createContext<GoogleAuthContextType | null>(null);

export const GoogleAuthProvider = ({ children } : any) => { 
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
    })

    const getUser = async () => {
        try {
            const user = await account.get();
            setUserInfo({
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

    const loginWithGoogle = () => {
        account.createOAuth2Session(
            'google',
            'http://localhost:3000/google-success',
            'http://localhost:3000/google-error'
        );
    }

    const getJwtToken = async () => {
        const jwt = await account.createJWT();
        return jwt;
    }

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
        <GoogleAuthContext.Provider value={{ userInfo, getUser, googleLogOut,loginWithGoogle, getJwtToken }}>
            {children}
        </GoogleAuthContext.Provider>
    )
}

export const useGoogleAuth = () => useContext(GoogleAuthContext) as GoogleAuthContextType;