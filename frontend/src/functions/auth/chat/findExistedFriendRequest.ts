import { prisma } from "@/lib/prisma";

export async function findExistedFriendRequest(userAId: number, userBId: number): Promise<{id: number} | null> {
    const existing = await prisma.friendships.findFirst({
        where: {
            AND : [
                { userId: userBId, friendId: userAId, status: 'pending' },
            ]
        },
        select: {
            id: true,
        }
    }) as {id: number} | null;

    return existing;
} 