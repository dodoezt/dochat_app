import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GetUserInfoFromCookie } from "@/lib/auth/getUserInfoFromCookie";

export async function PATCH(request: Request, { params } : { params: Promise<{friendshipId: number}> }) {
    const { friendshipId } = await params;
    if(!friendshipId) return NextResponse.json({ message: 'Friendship ID is required' }, { status: 400 });
    
    const userInfo = await GetUserInfoFromCookie()
    if(!userInfo) return NextResponse.json({message: 'auth failed'}, {status: 401})
        
    const { userId } = userInfo

    try {
        const response = await prisma.friendships.update({
            where: {id: Number(friendshipId), OR: [{userId: userId}, {friendId: userId}]},
            data: {status: 'accepted'}
        })

        return NextResponse.json({message: 'Friend request accepted'}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}

export async function DELETE(request: Request, {params} : {params: Promise<{friendshipId: number}>}) {
    const { friendshipId } = await params;
    if(!friendshipId) return NextResponse.json({ message: 'Friendship ID is required' }, { status: 400 });

    const userInfo = await GetUserInfoFromCookie()
    if(!userInfo) return NextResponse.json({message: 'auth failed'}, {status: 401})
        
    const { userId } = userInfo

    try {
        const respone = await prisma.friendships.delete({
            where: {id: Number(friendshipId), OR: [{userId: userId}, {friendId: userId}]}
        })

        return NextResponse.json({messgae: 'Removed friend successfully'}, {status: 200})
    } catch (error) {
        return NextResponse.json({message: 'Internal server error'}, {status: 500})
    }
}