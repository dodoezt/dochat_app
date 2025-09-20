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

export type friendshipsType = {
    id: number
    userId: number
    friendId: number 
    status: 'accepted' | 'pending' | 'rejected'
    createdAt: Date
    users_friendships_userIdTousers: {
        userId: number
        username: string
        user_atribut: {
            pfp_id: string
        }
    }
    users_friendships_friendIdTousers: {
        userId: number
        username: string
        user_atribut: {
            pfp_id: string
        }
    }
}

export type requesterConnectionsType = {
    friendshipId: number;
    requester: {
        userId: number;
        username: string;
        user_atribut: {
            pfp_id: string | null;
        }
    }
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
    friendships: friendshipsType[] | null;
    setFriendships: React.Dispatch<React.SetStateAction<friendshipsType[] | null>>;
    friendConnections: {
        friendshipId: number;
        friend: {
            userId: number;
            username: string;
            user_atribut: {
                pfp_id: string | null;
            }
        }
    }[];
    requesterConnections: requesterConnectionsType[];
    newFriendRequests: requesterConnectionsType[];
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