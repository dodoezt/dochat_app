'use client';
import React, { createContext, useContext } from 'react';
import {
  GoogleAuthProvider,
  useGoogleAuth,
  GoogleAuthContextType,
} from '../children/googleAuthcContext';

export const UnifiedAuthContext = createContext<GoogleAuthContextType | null>(null);

export const useUnifiedAuth = () => {
  const context = useContext(UnifiedAuthContext);
  if (!context) {
    throw new Error('useUnifiedAuth must be used within a UnifiedAuthProvider');
  }
  return context;
};

const GoogleToUnified = ({ children }: { children: React.ReactNode }) => {
  const googleAuth = useGoogleAuth(); // ✅ this now works
  return (
    <UnifiedAuthContext.Provider value={googleAuth}>
      {children}
    </UnifiedAuthContext.Provider>
  );
};

export const AuthProvider = ({
  children,
  provider,
}: {
  children: React.ReactNode;
  provider: 'google' | 'whatsapp' | null;
}) => {
  if (provider === 'google') {
    return (
      <GoogleAuthProvider>
        <GoogleToUnified>{children}</GoogleToUnified>
      </GoogleAuthProvider>
    );
  }


  return <>{children}</>;
};
