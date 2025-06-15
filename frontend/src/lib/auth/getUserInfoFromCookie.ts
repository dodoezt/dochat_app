import { cookies } from "next/headers";
import { verify } from 'jsonwebtoken'
import { userInfoByGoogle } from "@/types/contexts";

export type UserInfoFromCookieType = {
    userId: number,
    username: string,
    email: string,
    email_name: string,
}

export async function GetUserInfoFromCookie (): Promise<UserInfoFromCookieType | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get('log-session')?.value
    const secret = process.env.JWT_SECRET

    if(!token) {
        return null;
    }

    const decode = verify(token, secret!) as UserInfoFromCookieType
    if(!decode) return null

    const userInfo = {
        userId: decode.userId,
        username: decode.username,
        email: decode.email,
        email_name: decode.email_name,
    }

    return userInfo;
}