import { ConversationsCache } from '@/lib/caches/ConversationsCache'
import { NextResponse } from 'next/server';
import { ConversationListItem } from '@/components/seperated-component/chat/conversations';
import { redis } from "@/lib/caches/RedisCaches";
import { GetUserIdFromCookie } from "@/lib/auth/getUserIdFromCookie";

export async function GET() {
    const userId = await GetUserIdFromCookie();
    if (!userId) {
        return NextResponse.json({ conversations: null, message: 'User not authenticated' }, { status: 401 });
    }

    try {
        const cachedConversations: ConversationListItem[] | null | undefined = await redis.get(`conversations:${userId}`);
        console.log('Cached conversations:', cachedConversations);

        if(!cachedConversations) {
            return NextResponse.json({conversations: null, message: 'No conversations found in cache'}, { status: 404 });
        }

        return NextResponse.json({conversations: cachedConversations}, { status: 200 });
    } catch (error) {
        console.error('Error fetching conversations from cache:', error);
        return NextResponse.json({ conversations: [], message: 'Failed to fetch conversations' }, { status: 500 });
    }
}