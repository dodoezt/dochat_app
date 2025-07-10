import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: Request, {params}: {params: Promise<{ query: string }>}) {
    const {query} = await params

    if(query?.trim() === '' || !query) return NextResponse.json({res: null})

    try {
        const response = await prisma.users.findMany({
            where: {
                username : {
                    contains: query,
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

        if(response.length === 0) return NextResponse.json({res: []}, {status: 404})

        return NextResponse.json({res: response}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal Server Error'}, {status: 500})   
    }
}
