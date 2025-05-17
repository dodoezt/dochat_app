import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
    const { username, provider }: {username : string, provider : 'google' | 'whatsapp'} = await req.json()
    let user;

    if (!username || username.length < 5 || username.length > 20) return NextResponse.json({message: 'invalid request body'}, {status: 400})

    try {
        if(provider === 'google') {
            user = await prisma.users.findUnique({
                where: {username: username},
                select: {
                    userId: true,
                    username : true,
                    email: true,
                    email_name: true,
                    createdAt: true,
                }
            })
        } else if (provider === 'whatsapp'){
            user = await prisma.users.findUnique({
                where: {username: username},
                select: {
                    userId: true,
                    username : true,
                    phone_number: true,
                    dial_code: true,
                    createdAt: true,
                }
            })
        } else {
            return NextResponse.json({message: 'invalid provider'}, {status: 400})
        }

        if (!user) return NextResponse.json({message : 'user not found'}, {status: 404})    

        return NextResponse.json({user: user}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'internal server error'}, {status: 500})
    }

}