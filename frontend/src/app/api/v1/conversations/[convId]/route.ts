import { GetUserIdFromCookie } from '@/lib/auth/getUserIdFromCookie';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export type Context = {
  params: Promise<{ convId: string }>
};

export async function POST(req: Request, context: Context) {
  try {
    const { convId } = await context.params;
    const userId = await GetUserIdFromCookie()

    if (!convId) {
      return NextResponse.json({ error: 'Conversation ID and User ID are required' }, { status: 400 });
    }

    if (!userId) return NextResponse.json({message: 'invalid token or userId'}, {status:400})

    const conversation = await prisma.conversations.findUnique({
      where: { id: convId },
      include: {
        members: {
          include: {
            user: {
              select: {
                userId: true,
                username: true,
                user_atribut: {
                  select: {
                    pfp_id: true,
                  }
                }
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
    
    console.log('Other members:', otherMembers);

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
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
