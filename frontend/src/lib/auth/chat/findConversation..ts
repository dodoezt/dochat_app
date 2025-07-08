import { prisma} from '@/lib/prisma';

export async function findPrivateConversation(userAId: number, userBId: number) {
  const all = await prisma.conversations.findMany({
    where: {
      isGroup: false,
      members: {
        some: { userId: userAId }
      }
    },
    include: {
      members: true
    }
  });

  const existing = all.find(conv => {
    const ids = conv.members.map(m => m.userId).sort();
    return ids.length === 2 &&
      ids[0] === Math.min(userAId, userBId) &&
      ids[1] === Math.max(userAId, userBId);
  });

  return existing;
}
