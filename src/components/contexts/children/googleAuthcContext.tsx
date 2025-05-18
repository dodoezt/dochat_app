'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Client, Account, Models } from 'appwrite';

export type GoogleUserInfo = {
    username: string;
    email: string;
}

export type GoogleAuthContextType = {
    googleUserInfo: GoogleUserInfo;
    getUser: () => Promise<void>;
    googleLogOut: () => Promise<void>;
    loginWithGoogle: () => void;
    getJwtToken: () => Promise<Models.Jwt>;
    isLoggedIn :  boolean;
    setIsLoggedIn: (value : boolean) => void
}

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

function isTokenExpired(token: string): boolean {
  try {
    const base64Payload = token.split('.')[1];
    const payload = JSON.parse(atob(base64Payload));
    const now = Math.floor(Date.now() / 1000);
    return payload.exp < now;
  } catch {
    return true;
  }
}

const GoogleAuthContext = createContext<GoogleAuthContextType | null>(null);

export const GoogleAuthProvider = ({ children } : any) => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
        console.log(googleUserInfo)
    }, [googleUserInfo])

    useEffect(() => {
        getUser()
        const token = getCookie('log-session')
        if (token && !isTokenExpired(token)){
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }, [])

    return (
        <GoogleAuthContext.Provider value={{ googleUserInfo, getUser, googleLogOut,loginWithGoogle, getJwtToken, isLoggedIn, setIsLoggedIn }}>
            {children}
        </GoogleAuthContext.Provider>
    )
}

export const useGoogleAuth = () => useContext(GoogleAuthContext) as GoogleAuthContextType;