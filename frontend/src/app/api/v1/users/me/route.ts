import { GetUserInfoFromCookie } from '@/lib/auth/getUserInfoFromCookie';
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { UserCache } from '@/lib/caches/UserCache';
import { redis } from "@/lib/caches/RedisCaches";

export async function POST (req: Request) {
    const userInfo = await GetUserInfoFromCookie()
    const email = userInfo?.email;

    if(!email) return NextResponse.json({user: null, message: 'invalid email'}, {status: 400})

    // const cachedUser: any = redis.get(`user:${userInfo.userId}`);

    // if (cachedUser) {
    //     console.log('User found in cache:', cachedUser);
    //     return NextResponse.json({ user: cachedUser }, { status: 200 });
    // }
    
    try {
        const user = await prisma.users.findUnique({
            where: {email: email},
            select: {
                userId: true,
                username : true,
                email: true,
                email_name: true,
                createdAt: true,
                user_atribut: true,
            },
        })

        if (!user) return NextResponse.json({user: null, message : 'user not found'}, {status: 404})
            
        // await redis.set(`user:${userInfo.userId}`, JSON.stringify(user), {
        //     ex: 60 * 60 * 24,
        // })

        return NextResponse.json({user: user}, {status: 200})
    } catch (error) {
        return NextResponse.json({user:null, message: 'internal server error'}, {status: 500})
    }

}