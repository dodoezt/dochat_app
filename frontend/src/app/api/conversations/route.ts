import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { userId }: {userId: number} = await req.json()
    if(!userId) return NextResponse.json({message: 'invalid userId'}, {status: 400})

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
        
    }
}
