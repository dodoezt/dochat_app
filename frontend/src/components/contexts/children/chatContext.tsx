'use client'
import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
// import { useParams, useSearchParams } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useGlobalContext } from '@/components/contexts/parents/globalProvider'
import { useAuthContext } from '@/components/contexts/children/authContext';
import socket from '@/lib/socket';
import { UseBoolean } from '@/hooks/useBoolean';
import { produce } from 'immer'

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
    senderPfp_id: string | null;
    senderUsername: string;
    content: string;
    sentAt: string;
    status?: 'NOT_DELIVERED' | 'DELIVERED' | 'SEEN';
};

type PreviewMessageType = MessageType & {
    temporaryId: string;
}

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
        console.log('conversations:', conversations)
    }, [conversations])

    useEffect(() => {
        console.log('online users:', onlineUsers)
    }, [onlineUsers])
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
        if(loadingServer?.value, loadingConversations.value) return
    
        const handleNewPreviewMessage = (msg: PreviewMessageType) => {
            console.log('New preview message received:', msg);
            setConversations((prev) => {
                if (!prev) return prev;
                
                const updated = [...prev];
                const conversationIndex = updated.findIndex(
                    (conv) => conv.conversationId === msg.conversationId
                );
        
                if (conversationIndex !== -1) {
                    if (updated[conversationIndex].conversation.messages.length === 0) {
                        return updated.map((conv) => 
                            conv.conversationId === msg.conversationId ? {
                                ...conv,
                                conversation: {
                                    ...conv.conversation,
                                    messages: [{
                                        id: msg.id,
                                        conversationId: msg.conversationId,
                                        senderId: msg.senderId,
                                        senderUsername: msg.senderUsername,
                                        senderPfp_id: msg.senderPfp_id,
                                        content: msg.content,
                                        sentAt: msg.sentAt,
                                        status: msg.status,
                                    }],
                                },
                            } : conv
                        )
                    }
                    // Check if message already exists to prevent duplicates
                    const messageExists = updated[conversationIndex].conversation.messages
                        .some(existingMsg => existingMsg.id === msg.temporaryId);
                    
                    if (messageExists) {
                        const existingMessageIndex = updated[conversationIndex].conversation.messages
                            .findIndex(existingMsg => existingMsg.id === msg.id);
                        return updated.map((conv) => 
                            conv.conversationId === msg.conversationId ? {
                                ...conv,
                                conversation: {
                                    ...conv.conversation,
                                    messages: conv.conversation.messages.map((message, msgIndex) => msgIndex === existingMessageIndex ? {
                                        ...message, status: msg.status
                                    } : message)
                                }
                            } : conv
                        )
                    }

                    const updatedMessages = [
                        {
                            id: msg.id,
                            conversationId: msg.conversationId,
                            senderId: msg.senderId,
                            senderUsername: msg.senderUsername,
                            senderPfp_id: msg.senderPfp_id,
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
        socket.on('new-messages-received', ({ isUpdated}) => {
            if (isUpdated) {
                setConversations(
                    produce((draft) => {
                        draft?.forEach((conv) => {
                            conv.conversation.messages.forEach((msg) => {
                                if (msg.status === 'NOT_DELIVERED') {
                                    msg.status = 'DELIVERED';
                                }
                            });
                        });
                    })
                )
            }
        })

        socket.on('update-not-delivered-messages', ({ userId }) => {
            setConversations((prev) =>
                prev!.map((conv) => {
                    const isRelevant = conv.conversation.members.some(
                        (member) => member.user.userId === userId
                    )

                    if (!isRelevant) return conv;

                    return {
                        ...conv,
                        conversation: {
                            ...conv.conversation,
                            messages: conv.conversation.messages.map((msg) =>
                                msg.status === 'NOT_DELIVERED' ? {
                                    ...msg,
                                    status: isOnline(msg.senderId) ? 'DELIVERED' : 'NOT_DELIVERED'
                                } : msg
                            ),
                        },
                    };
                })
            );
        })

        socket.on('status-to-seen', ({ conversationId, userId }) => {
            setConversations(
                produce((draft) => {
                    const conversation = draft?.find(conv => conv.conversationId === conversationId)

                    if(conversation) {
                        conversation.conversation.messages.forEach((msg) => {
                            if(msg.status === 'DELIVERED' && msg.senderId !== userId) {
                                msg.status = 'SEEN';
                            }
                        })
                    }
                })
            )
        })

        // Cleanup function to remove the event listener
        return () => {
            socket.off('new-preview-message', handleNewPreviewMessage);
            socket.off('new-messages-received');
            socket.off('update-not-delivered-messages');
        };
    }, [loadingServer, loadingConversations.value]);

    const isOnline = (userId: number) => onlineUsers!.some(user => user.userId === userId);

    const getCachedConversations = async () => {
        loadingCachedConversations.setTrue()
        try {
          const response = await fetch('/api/v1/caches/conversations', {
            method: 'GET',
          });
    
          const data = await response.json();
        //   const filteredData = data.conversations.filter((conversation : ConversationListItem) => conversation.conversation.messages.length !== 0)
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
        <ChatContext.Provider value={{userInfo, conversations, setConversations, currentConvId, lastConvId, setLastConvId, loadingCachedConversations, loadingConversations, onlineUsers: onlineUsers || []}}>
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