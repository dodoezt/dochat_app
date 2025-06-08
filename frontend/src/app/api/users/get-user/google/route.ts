import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST (req: Request) {
    const { email, provider }: {email : string, provider : 'google' | 'whatsapp'} = await req.json()
    
    let user;

    if(!email || provider !== 'google') return NextResponse.json({message: 'invalid email'}, {status: 400})

    try {
        if (provider === 'google') {
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
        } else {
            return NextResponse.json({message: 'invalid provider'}, {status: 400})
        }

        if (!user) return NextResponse.json({message : 'user not found'}, {status: 404})    

        return NextResponse.json({user: user}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'internal server error'}, {status: 500})
    }

}