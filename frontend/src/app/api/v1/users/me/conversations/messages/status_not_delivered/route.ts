import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { GetUserIdFromCookie } from "@/lib/auth/getUserIdFromCookie";


export async function PATCH(req: Request) {
    const userId = await GetUserIdFromCookie()

    if (!userId) {
        return NextResponse.json({ error: 'not authorized' }, { status: 400 });
    }

    try {
        const updatedMessages = await prisma.messages.updateMany({
            where: {
                status: 'NOT_DELIVERED',
                senderId: {not: userId},
                conversation : {
                    members: {
                        some: {
                            userId
                        }
                    }
                }
            },
            data: {
                status: 'DELIVERED',
            },
        });

        return NextResponse.json({ message: 'Conversation updated successfully'}, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update conversation' }, { status: 500 });
    }
}