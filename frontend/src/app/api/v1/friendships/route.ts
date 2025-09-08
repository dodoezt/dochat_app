import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GetUserInfoFromCookie } from "@/lib/auth/getUserInfoFromCookie";
import formatDate from "@/functions/formatDate";

export async function POST(request: Request) {
    const userInfo = await GetUserInfoFromCookie()
    if(!userInfo) return NextResponse.json({message: 'auth failed'}, {status: 401})

    const { userId } = userInfo
    const { toUserId } = await request.json()

    const createdAt = new Date()

    try {
        const response = await prisma.friendships.create({
            data: {
                userId: userId,
                friendId: toUserId,
                status: 'pending',
                created_at: createdAt,
            }
        })

        console.log("respone:", response)

        if(!response) {
            return NextResponse.json({message: 'Failed to send friend request'}, {status: 400})
        }

        return NextResponse.json({data: response}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}