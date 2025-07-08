import { GetUserIdFromCookie } from "@/lib/auth/getUserIdFromCookie";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { findPrivateConversation } from '@/lib/auth/chat/findConversation.'

export async function POST(req: Request) {
    const userId = await GetUserIdFromCookie()
    const targetUserId = await req.json();

    if (!userId) {
        return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
    }

    if (!targetUserId) {
        return NextResponse.json({ error: "Target user ID is required" }, { status: 400 });
    }

    const existing = await findPrivateConversation(userId, targetUserId);

    if (existing) {
        return NextResponse.json({ conversationId: existing.id }, { status: 200 });
    }

    try {
        const conversation = await prisma.conversations.create({
            data: {
                id: crypto.randomUUID(),
                isGroup: false,
                members: {
                    create: [
                        { userId: userId },
                        { userId: targetUserId }
                    ]
                }
            }
        })

        return NextResponse.json({ conversationId: conversation.id }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Failed to create conversation" }, { status: 500 });
    }
}