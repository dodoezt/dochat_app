import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";


import { userInfoByGoogle } from '@/types/contexts'
import { GetUserIdFromCookie } from "@/lib/auth/getUserIdFromCookie";

export async function POST(req: Request) {
    const userId = await GetUserIdFromCookie()
    
    if(!userId) return NextResponse.json({message: 'invalid token'}, {status: 400})
    console.log(userId)
    
    try {
        const conversations = await prisma.conversation_members.findMany({
            where: {
                userId: userId,
            },
            include: {
                conversation: {
                    include: {
                        members: {
                            include: {
                                user: {
                                    select: {
                                        username: true,
                                        email: true,
                                    },
                                },
                            },
                        },
                        messages: {
                            orderBy: {
                                sentAt: 'desc',
                            },
                        },
                    },
                },
            },
        });

        if(!conversations || conversations.length === 0) return NextResponse.json({message: 'no conversations found'}, {status: 404})

        return NextResponse.json({ conversations }, { status: 200 })
    } catch (error) {
        console.error('Error fetching conversations:', error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}
