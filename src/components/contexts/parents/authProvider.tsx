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

import { UnifiedAuthContextType, UnLoggedContextType } from '@/types/contexts';

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

const MergedProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: UnifiedAuthContextType;
}) => {
  return (
    <UnifiedAuthContext.Provider value={value}>
      {children}
    </UnifiedAuthContext.Provider>
  );
};


export const UnifiedAuthContext = createContext<UnifiedAuthContextType | null>(null);

export const useUnifiedAuth = () => {
  const context = useContext(UnifiedAuthContext);
  if (!context) {
    throw new Error('useUnifiedAuth must be used within a UnifiedAuthProvider');
  }
  return context;
};

const GoogleToUnified = ({
  children,
  setProvider,
}: {
  children: React.ReactNode;
  setProvider: (provider: 'google' | 'whatsapp' | null) => void;
}) => {
  const googleAuth = useGoogleAuth();

  const unifiedValue: UnifiedAuthContextType = {
    ...googleAuth,
    setProvider,
  };

  return (
    <MergedProvider value={unifiedValue}>
      {children}
    </MergedProvider>
  );
};

const UnLoggedToUnified = ({
  children,
  setProvider,
}: {
  children: React.ReactNode;
  setProvider: (provider: 'google' | 'whatsapp' | null) => void;
}) => {
  const unLogged = useUnlogged();

  const unifiedValue: UnifiedAuthContextType = {
    ...unLogged,
    provider: null,
    setProvider,
  };

  return (
    <MergedProvider value={unifiedValue}>
      {children}
    </MergedProvider>
  );
};


export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<'google' | 'whatsapp' | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(provider)
  }, [provider])

  useEffect(() => {
    const checkAuthFromCookie = () => {
      const cookie = document.cookie
        .split('; ')
        .find((row) => row.startsWith('log-session='));

      if (!cookie) {
        setProvider(null);
        setLoading(false);
        return;
      }

      const token = cookie.split('=')[1];
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        console.log(decoded)
        if (decoded.provider === 'google' || decoded.provider === 'whatsapp') {
          setProvider(decoded.provider);
        } else {
          setProvider(null);
        }
      } catch {
        setProvider(null);
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
        <GoogleToUnified setProvider={setProvider}>
          {children}
        </GoogleToUnified>
      </GoogleAuthProvider>
    );
  }

  return (
    <UnLoggedProvider>
      <UnLoggedToUnified setProvider={setProvider}>
        {children}
      </UnLoggedToUnified>
    </UnLoggedProvider>
  );
};
