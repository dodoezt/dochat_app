import { GetUserInfoFromCookie } from '@/lib/auth/getUserInfoFromCookie';
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'
import { UserCache } from '@/lib/chaches/UserCache';

export async function POST (req: Request) {
    const userInfo = await GetUserInfoFromCookie()
    const email = userInfo?.email;

    if(!email) return NextResponse.json({message: 'invalid email'}, {status: 400})

    // const cache = UserCache.get('user')
    // if(cache) {
    //     console.log('cache:', cache)
    //     return NextResponse.json({user: cache, message: 'cache provided'}, {status: 200})
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

        if (!user) return NextResponse.json({message : 'user not found'}, {status: 404})
            
        UserCache.set('user', user)

        return NextResponse.json({user: user}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'internal server error'}, {status: 500})
    }

}