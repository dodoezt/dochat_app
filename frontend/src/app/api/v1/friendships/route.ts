import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GetUserInfoFromCookie } from "@/functions/auth/user/getUserInfoFromCookie";
import formatDate from "@/functions/formatDate";
import { findExistedFriendRequest } from "@/functions/auth/chat/findExistedFriendRequest";

export async function POST(request: Request) {
    const userInfo = await GetUserInfoFromCookie()
    if(!userInfo) return NextResponse.json({message: 'auth failed'}, {status: 401})

    const { userId } = userInfo
    const { toUserId } = await request.json()

    if(userId === toUserId) {
        return NextResponse.json({message: 'You cannot send friend request to yourself'}, {status: 400})
    }

    if(!toUserId || typeof toUserId !== 'number') {
        return NextResponse.json({message: 'Invalid user ID'}, {status: 400})
    }

    const isFriendRequestExisted = await findExistedFriendRequest(userId, toUserId)

    console.log('isFriendRequestExisted', isFriendRequestExisted);

    const createdAt = new Date()

    try {
        if (isFriendRequestExisted) {
            const response = await prisma.friendships.update({
                where: {
                    id: isFriendRequestExisted.id
                }, 
                data: {
                    status: "accepted"
                }
            })
            return NextResponse.json({data: response, isExisted: true}, {status: 200})
        }

        const response = await prisma.friendships.create({
            data: {
                userId: userId,
                friendId: toUserId,
                status: 'pending',
                created_at: createdAt,
            }
        })

        if(!response) {
            return NextResponse.json({message: 'Failed to send friend request'}, {status: 400})
        }

        return NextResponse.json({data: response, isExisted: false}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}