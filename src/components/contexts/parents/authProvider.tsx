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

import { UnifiedAuthContextType, UnLoggedContextType, DecodedToken } from '@/types/contexts';

import { jwtDecode } from 'jwt-decode';

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

  // useEffect(() => {
  //   console.log(provider)
  // }, [provider])

  // useEffect(() => {
  //   console.log('authProvdier mount')
  // }, [])


  //NOTE : FIX CHECK COOKIE DAN SETPROVIDER
  const getProviderFromCookie = async() => {
    setLoading(true)
    try {
      const response = await fetch('/api/auth/get-provider', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const providerFromAPI = await response.json();
      setProvider(providerFromAPI.provider)
    } catch (error) {
      console.log(error) 
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getProviderFromCookie();
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
