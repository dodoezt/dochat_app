import { Models } from "appwrite";
export type ProviderType = 'google' | 'whatsapp' | null;

export type BaseAuthContext = {
  provider: ProviderType;
};

export type GoogleUserInfo = {
    username: string;
    email: string;
}

export type GoogleAuthContextType = BaseAuthContext & {
    provider: 'google';
    googleUserInfo: GoogleUserInfo;
    getUser: () => Promise<void>;
    googleLogOut: () => Promise<void>;
    getJwtToken: () => Promise<Models.Jwt>;
};

export type UnLoggedContextType = BaseAuthContext & {
    provider: null;
    loginWithGoogle: () => void;
};

export type UnifiedAuthContextType = GoogleAuthContextType | UnLoggedContextType;
