'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  GoogleAuthProvider,
  useGoogleAuth,
} from '../children/googleAuthContext';
import {
  UnLoggedProvider,
  useUnlogged,
} from '../children/unLoggedContext';

import { UnifiedAuthContextType } from '@/types/contexts';

const UnifiedAuthContext = createContext<UnifiedAuthContextType | null>(null);

export const useUnifiedAuth = () => {
  const context = useContext(UnifiedAuthContext);
  if (!context) {
    throw new Error('useUnifiedAuth must be used within a UnifiedAuthProvider');
  }
  return context;
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
  return <MergedProvider value={unifiedValue}>{children}</MergedProvider>;
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
  return <MergedProvider value={unifiedValue}>{children}</MergedProvider>;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [provider, setProvider] = useState<'google' | 'whatsapp' | null | undefined>(undefined);

  useEffect(() => {
    const getProviderFromCookie = async () => {
      try {
        const response = await fetch('/api/auth/get-provider', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();
        setProvider(data.provider); // 'google', 'whatsapp', or null
      } catch (error) {
        console.error('Failed to get provider:', error);
        setProvider(null); // fallback
      }
    };

    getProviderFromCookie();
  }, []);

  useEffect(() => {
    console.log(provider)
  }, [provider])

  // Masih loading
  if (provider === undefined) return null;

  // User login via Google
  if (provider === 'google') {
    return (
      <GoogleAuthProvider>
        <GoogleToUnified setProvider={setProvider}>
          {children}
        </GoogleToUnified>
      </GoogleAuthProvider>
    );
  }

  // Belum login
  return (
    <UnLoggedProvider>
      <UnLoggedToUnified setProvider={setProvider}>
        {children}
      </UnLoggedToUnified>
    </UnLoggedProvider>
  );
};
