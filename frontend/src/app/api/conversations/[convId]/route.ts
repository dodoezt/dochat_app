import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

type Context = {
  params: Promise<{ convId: string }>
};

export async function POST(req: Request, context: Context) {
  try {
    const { convId } = await context.params;
    const { userId } = await req.json();

    if (!convId || !userId) {
      return NextResponse.json({ error: 'Conversation ID and User ID are required' }, { status: 400 });
    }

    const conversation = await prisma.conversations.findUnique({
      where: { id: convId },
      include: {
        members: {
          include: {
            user: {
              select: {
                userId: true,
                username: true,
                email: true,
              }
            }
          }
        },
        messages: {
          select: {
            id: true,
            content: true,
            sentAt: true,
            status: true,
            senderId: true,
            conversationId: true
          },
          orderBy: { sentAt: 'asc' } 
        }
      }
    });

    if (!conversation) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    const isMember = conversation.members.some(member => member.user.userId === userId);
    if (!isMember) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const otherMembers = conversation.members
      .filter(member => member.user.userId !== userId)
      .map(member => member.user);

    return NextResponse.json({
      conversation: {
        id: conversation.id,
        isGroup: conversation.isGroup,
        name: conversation.name,
        createdAt: conversation.createdAt,
        messages: conversation.messages
      },
      members: otherMembers
    }, { status: 200 });

  } catch (error) {
    console.error('Error in POST /api/conversations/[convId]', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
