'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  useGoogleAuth,
} from '../children/googleAuthContext';
import {
  UnLoggedProvider,
  useUnlogged,
} from '../children/unLoggedContext'

import { UnifiedAuthContextType } from '@/types/contexts';

import { jwtDecode } from 'jwt-decode';

type DecodedToken = {
  userId: number,
  username: string,
  provider: 'google' | 'whatsapp' | null,
  email?: string,
  email_name?: string,
  phone_number?: string,
  dial_code?: string,
};

export const UnifiedAuthContext = createContext<UnifiedAuthContextType | null>(null);

export const useUnifiedAuth = () => {
  const context = useContext(UnifiedAuthContext);
  if (!context) {
    throw new Error('useUnifiedAuth must be used within a UnifiedAuthProvider');
  }
  return context;
};

const GoogleToUnified = ({ children }: { children: React.ReactNode }) => {
  const googleAuth = useGoogleAuth();
  return (
    <UnifiedAuthContext.Provider value={googleAuth}>
      {children}
    </UnifiedAuthContext.Provider>
  );
};

const UnLoggedToUnified = ({ children }: { children: React.ReactNode }) => {
  const unLoggedValue = useUnlogged();
  return (
    <UnifiedAuthContext.Provider value={unLoggedValue}>
      {children}
    </UnifiedAuthContext.Provider>
  )
}

export const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [provider, setProvider] = useState<string | null>('google');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthFromCookie = () => {
      const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('log-session='));
      if (!cookie) {
        setLoading(false);
        return;
      }

      const token = cookie.split('=')[1];
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setProvider(decoded.provider);
      } catch (error) {
        console.error('Invalid token', error);
      } finally {
        setLoading(false);
      }
    };

    checkAuthFromCookie();
  }, []);

  if (loading) return null; 

  if (provider === 'google') {
    return (
      <GoogleAuthProvider>
        <GoogleToUnified>
          {children}
        </GoogleToUnified>
      </GoogleAuthProvider>
    );
  }

  return (
    <UnLoggedProvider>
      <UnLoggedToUnified>
        {children}
      </UnLoggedToUnified>
    </UnLoggedProvider>
  );
};
