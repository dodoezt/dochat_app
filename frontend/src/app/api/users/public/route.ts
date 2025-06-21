import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"

export type UserType = {
    username: string
    tags_used: number[],
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url)
    const username = searchParams.get('username')

    console.log('username: ', username)

    if(!username) return NextResponse.json({message: 'username needed'}, {status: 401})

    try {
        const user = await prisma.users.findUnique({
            where: {
                username: username!,
            },
            select : {
                username: true,
                tags_used: true,
            }
        }) as UserType | null

        if (!user) return NextResponse.json({message: 'no user found'}, {status: 404})

        return NextResponse.json(user)
    } catch (error) {
        return NextResponse.json({message: 'internal server error'}, {status: 500})
    }
}