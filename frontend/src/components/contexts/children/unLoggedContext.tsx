import { useContext, createContext, useState, useEffect } from 'react'
import { UnLoggedContextType } from '@/types/contexts'
import { Client, Account, OAuthProvider } from 'appwrite'

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const UnLoggedContext = createContext<UnLoggedContextType | null>(null)

export const useUnlogged = () => useContext(UnLoggedContext)

export const UnLoggedProvider = ({ children } : any) => {
    const loginWithGoogle = () => {
        account.createOAuth2Session(
            OAuthProvider.Google,
            'http://localhost:3000/google-success',
            'http://localhost:3000/google-error'
        );
    }
      return (
        <UnLoggedContext.Provider value={{ provider: null, loginWithGoogle}}>
            { children }
        </UnLoggedContext.Provider>
    )
}