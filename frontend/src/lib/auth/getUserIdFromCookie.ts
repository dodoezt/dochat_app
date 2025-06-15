import { cookies } from "next/headers";
import { verify } from 'jsonwebtoken'

export async function GetUserIdFromCookie (): Promise<number | null> {
    const cookieStore = await cookies()
    const token = cookieStore.get('log-session')?.value
    const secret = process.env.JWT_SECRET

    if(!token) {
        return null;
    }

    const { userId } = verify(token, secret!) as {userId: number}
    if(!userId) return null

    return userId;
}