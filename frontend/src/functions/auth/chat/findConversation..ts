import { prisma } from '@/lib/prisma';

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

  console.log('all conversations:', all)

  const existing = all.find(conv => {
    const ids = conv.members.map(m => m.userId).sort();
    console.log('ids:', ids)
    return ids.length === 2 &&
      ids.some(id => id === userAId) &&
      ids.some(id => id === userBId);
  });

  console.log('is existing?', existing)

  return existing;
}

// FIX ONLINE USERS, DAN JUGA START CONVERSATIONS
