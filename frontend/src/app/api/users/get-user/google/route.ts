import { GetUserInfoFromCookie } from '@/lib/auth/getUserInfoFromCookie';
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
    const userInfo = await GetUserInfoFromCookie()
    const email = userInfo?.email;

    let user;

    if(!email) return NextResponse.json({message: 'invalid email'}, {status: 400})

    try {
        user = await prisma.users.findUnique({
            where: {email: email},
            select: {
                userId: true,
                username : true,
                email: true,
                email_name: true,
                createdAt: true,
            }
        })

        if (!user) return NextResponse.json({message : 'user not found'}, {status: 404})    

        return NextResponse.json({user: user}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'internal server error'}, {status: 500})
    }

}