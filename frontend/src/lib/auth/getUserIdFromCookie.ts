import { cookies } from "next/headers";
import { verify } from 'jsonwebtoken'

export const GetUserIdFromCookie = async (): Promise<number | null> => {
    const cookieStore = await cookies()
    const token = cookieStore.get('log-session')?.value

    if(!token) return null

    try {
        const { userId } = verify(token, process.env.JWT_SECRET!) as {userId: number}
        return userId
    } catch (error) {
        console.error('invalid token', error)
        return null;
    }
}