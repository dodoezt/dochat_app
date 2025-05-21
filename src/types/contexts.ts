import { Models } from "appwrite";
export type ProviderType = 'google' | 'whatsapp' | null;

export type BaseAuthContext = {
  provider: ProviderType;
  setProvider?: (provider: ProviderType) => void;
};

export type GoogleUserInfo = {
    username: string;
    email: string;
}

export type GoogleAuthContextType = BaseAuthContext & {
    provider: ProviderType;
    googleUserInfo?: GoogleUserInfo;
    getUser?: () => Promise<void>;
    googleLogOut?: () => Promise<void>;
    getJwtToken?: () => Promise<Models.Jwt>;
};

export type UnLoggedContextType = BaseAuthContext & {
    provider: ProviderType;
    googleUserInfo?: GoogleUserInfo;
    getUser?: () => Promise<void>;
    loginWithGoogle?: () => void;
};

export type UnifiedAuthContextType = GoogleAuthContextType | UnLoggedContextType;
