import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url)
    const username = searchParams.get('username')

    if(username?.trim() === '' || !username) return NextResponse.json({res: null})

    try {
        const response = await prisma.users.findMany({
            where: {
                username : {
                    contains: username,
                }
            },
            select: {
                userId: true,
                username: true,
                user_atribut: {
                    select: {
                        pfp_id: true,
                    }
                }
            }
        })        

        if(response.length === 0) return NextResponse.json({res: null}, {status: 404})

        return NextResponse.json({res: response}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500})   
    }
}
