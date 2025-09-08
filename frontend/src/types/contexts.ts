import { Models } from "appwrite";
import { UseBooleanType } from "./hooks";
export type ProviderType = 'google' | 'whatsapp' | null;

export type BaseAuthContext = {
  provider: ProviderType;
  setProvider?: (provider: ProviderType) => void;
};

export type GoogleUserInfo = {
    email_name: string;
    email: string;
}

export type AuthContextType = BaseAuthContext & {
    provider: ProviderType;
    userInfo?: userInfoByGoogle;
    googleUserInfo?: GoogleUserInfo;
    getUser?: () => Promise<void>;
    googleLogOut?: () => Promise<void>;
    getJwtToken?: () => Promise<Models.Jwt>;
    loadingGetUser?: UseBooleanType;
    loadingServer?: UseBooleanType;
    onlineUsers?: any[];
    audio: any;
};

export type UnLoggedContextType = BaseAuthContext & {
    provider: ProviderType;
    googleUserInfo?: GoogleUserInfo;
    getUser?: () => Promise<void>;
    loginWithGoogle?: () => void;
};

export type UnifiedAuthContextType = AuthContextType & UnLoggedContextType;


export type DecodedToken = {
    userId: number,
    username: string,
    email?: string,
    email_name?: string,
    phone_number?: string,
    dial_code?: string,
};

export type userInfoByGoogle = {
    userId: number | null,
    username: string,
    email: string,
    email_name: string,
    createdAt: string,
}