import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GetUserIdFromCookie } from "@/functions/auth/user/getUserIdFromCookie";


export async function PATCH(req: Request, context: { params: Promise<{ convId: string }> }) {
    const { convId } = await context.params;
    const userId = await GetUserIdFromCookie()

    if (!convId || !userId) {
        return NextResponse.json({ error: 'not authorized' }, { status: 400 });
    }

    try {
        const updatedConversation = await prisma.conversations.update({
            where: {id: convId},
            data: {
                messages : {
                    updateMany: {
                        where : {
                            senderId: {not: userId},
                            status: 'DELIVERED'
                        },
                        data: {
                            status: 'SEEN'
                        }
                    }
                }
            }
        })

        return NextResponse.json({ message: 'Conversation updated successfully'}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update conversation' }, { status: 500 });
    }
}