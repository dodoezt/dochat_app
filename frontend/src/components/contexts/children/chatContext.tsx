'use client'
import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { useGlobalContext } from '@/components/contexts/parents/globalProvider'
import { useAuthContext } from '@/components/contexts/children/authContext';
import socket from '@/lib/socket';
import { UseBoolean } from '@/hooks/useBoolean';

export type ConversationListItem = {
  conversation: {
    id: string;
    isGroup: boolean;
    name: string | null;
    createdAt: Date;
    members: {
      user: {
        userId: number,
        username: string,
        user_atribut: {
          pfp_id: string | null,
        }
      };
    }[];
    messages: MessageType[];
  };
  userId: number;
  conversationId: string;
  joinedAt: Date;
};

export type MessageType = {
    id: string;
    conversationId: string;
    senderId: number;
    content: string;
    sentAt: string;
    status?: 'NOT_DELIVERED' | 'DELIVERED' | 'SEEN';
};

interface ChatContextType {
    userInfo: any;
    conversations: ConversationListItem[] | null;
    setConversations: React.Dispatch<React.SetStateAction<ConversationListItem[] | null>>;
    currentConvId: string | null;
    lastConvId: string | null;
    setLastConvId: React.Dispatch<React.SetStateAction<string | null>>;
    loadingCachedConversations: ReturnType<typeof UseBoolean>;
    loadingConversations: ReturnType<typeof UseBoolean>;
    onlineUsers: any[] | null;
}

export const ChatContext = createContext<ChatContextType | null>(null)

export const ChatProvider = ({ children }: {children: React.ReactNode}) => {
    const auth = useAuthContext();
    const { userInfo, loadingServer, onlineUsers } = auth;
    const params = useParams() as { convId?: string };
    const currentConvId: string | null = params.convId || null;
    
    const [lastConvId, setLastConvId] = useState<string | null>(null);
    const [conversations, setConversations] = useState<ConversationListItem[] | null>(null);

    const loadingCachedConversations = UseBoolean(true)
    const loadingConversations = UseBoolean(true)
    

    //TESTING USEEFFECT
    useEffect(() => {
        console.log(currentConvId, 'currentConvId in ChatProvider');
    }, [currentConvId]);
    useEffect(() => {
        console.log('conversations in context:', conversations)
    })
    //TESTING USEEFFECT
    
    useEffect(() => {
        getCachedConversations()
    }, []);

    useEffect(() => {
        if(loadingServer?.value) return;
        if(currentConvId) {
            socket.emit('join-room', {
                userId: userInfo?.userId,
                conversationId: currentConvId
            });
        }
        if(!currentConvId && lastConvId) {
            socket.emit('leave-room', {
                userId: userInfo?.userId,
                conversationId: lastConvId
            })
        }
        if(currentConvId && currentConvId !== lastConvId) {
            setLastConvId(currentConvId);
        }
    }, [currentConvId, loadingServer]);

    useEffect(() => {
        if(loadingServer?.value) return
    
        const handleNewPreviewMessage = (msg: MessageType) => {
            setConversations((prev) => {
            const updated = [...prev!];
            const conversationIndex = updated.findIndex(
                (conv) => conv.conversationId === msg.conversationId
            );
    
            if (conversationIndex !== -1) {
                const updatedMessages = [
                {
                    id: msg.id,
                    conversationId: msg.conversationId,
                    senderId: msg.senderId,
                    content: msg.content,
                    sentAt: msg.sentAt,
                    status: msg.status,
                },
                ...updated[conversationIndex].conversation.messages,
                ];
    
                updated[conversationIndex] = {
                ...updated[conversationIndex],
                conversation: {
                    ...updated[conversationIndex].conversation,
                    messages: updatedMessages,
                },
                };
            }
    
            return updated;
            });
        };
    
        socket.on('new-preview-message', handleNewPreviewMessage);
    }, [loadingServer]);

    const getCachedConversations = async () => {
        loadingCachedConversations.setTrue()
        try {
          const response = await fetch('/api/v1/caches/conversations', {
            method: 'GET',
          });
    
          const data = await response.json();
          setConversations(data.conversations);
        } catch (error) {
          console.error('Error fetching cached conversations:', error);
        } finally {
          loadingCachedConversations.setFalse();
          getConversations();
        }
      }
    
    const getConversations = async () => {
        loadingConversations.setTrue()
        try {
            const response = await fetch('/api/v1/users/me/conversations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            });

            const data = await response.json();
            setConversations(data.conversations);
        } catch (error) {
            console.error('Error fetching conversations:', error);
        } finally {
            loadingConversations.setFalse();
        }
    }

    if (loadingCachedConversations.value || !conversations || loadingServer?.value) {
        return <p className="text-white">loading...</p>
    }

    return (
        <ChatContext.Provider value={{userInfo, conversations, setConversations, currentConvId, lastConvId, setLastConvId, loadingCachedConversations, loadingConversations, onlineUsers}}>
            {children}
        </ChatContext.Provider>
    )
}

export const useChatContext = () => {
    const context = useContext(ChatContext) as ChatContextType | null;
    if (!context) {
        throw new Error('useChatContext must be used within a ChatProvider');
    }
    return context;
}