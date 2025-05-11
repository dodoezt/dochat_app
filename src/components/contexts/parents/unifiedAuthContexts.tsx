'use client'
import { createContext, use, useContext, useEffect } from 'react';
import { useGoogleAuth, GoogleAuthContextType} from '@/components/contexts/children/googleAuthcContext';

export const UnifiedAuthContext = createContext<GoogleAuthContextType | null>(null)

export const UnifiedAuthProvider = ({ children, provider }: {children : any, provider: 'google' | 'whatsapp' | null}) => {
    let auth = null;

    if (provider === 'google') {
        auth = useGoogleAuth();
    } else if (provider === null) {
        auth = null;
    }

    useEffect(() => {
        console.log(auth)
    }, [auth])

    return (
        <UnifiedAuthContext.Provider value={auth}>
            {children}
        </UnifiedAuthContext.Provider>
    )
}

export const useUnifiedAuth = () => useContext(UnifiedAuthContext) as GoogleAuthContextType;