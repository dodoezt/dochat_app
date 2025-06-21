'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import ChatSearchBar from '@/components/seperated-component/chat/searchBar'
import ChatNavbar from '@/components/seperated-component/chat/navbar'
import LogoLoading from '@/components/loadings/logoLoading'
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider'

import { FaRegCircleUser } from "react-icons/fa6";
import { BsCheckAll } from "react-icons/bs";
import socket from '@/lib/socket'

const VALID_TABS = ['chat', 'search']
const DEFAULT_TAB = 'chat'

type ConversationListItem = {
  conversation: {
    id: string;
    isGroup: boolean;
    name: string | null;
    createdAt: Date;
    members: {
      user: {
        username: string | null;
        email: string | null;
      };
    }[];
    messages: {
      id: number;
      content: string;
      sentAt: Date;
      status: 'NOT_DELIVERED' | 'DELIVERED' | 'SEEN';
      senderId: number;
      conversationId: string;
    }[];
  };
  userId: number;
  conversationId: string;
  joinedAt: Date;
};

type ConversationMessages = {
  id: number;
  content: string;
  sentAt: Date;
  status: 'NOT_DELIVERED' | 'DELIVERED' | 'SEEN';
  senderId: number;
  conversationId: string;
}

type props = {
    userInfo: any,
}

const Conversations:React.FC<props> = ({userInfo}) => {
  const [isSearchOnFocus, setIsSearchOnFocus] = useState<boolean>(false)
  const [loadingConversations, setLoadingConversations] = useState<boolean>(true)
  
  const [conversations, setConversations] = useState<ConversationListItem[]>([]);

  const router = useRouter()
  
  useEffect(() => {
    if (!userInfo) {
      console.log('No user info available, skipping socket connection.');
      return;
    }
    socket.emit('join-user-room', userInfo.userId);

    const handleNewPreviewMessage = (msg: ConversationMessages) => {
      setConversations((prev) => {
        const updated = [...prev];
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

    return () => {
      socket.off('new-preview-message', handleNewPreviewMessage);
      socket.emit('leave-user-room', userInfo.userId)
    };
  }, [userInfo]);
  
  useEffect(() => {
    getConversations()
  }, []);

  const getConversations = async () => {
    setLoadingConversations(true);
    try {
      const response = await fetch('/api/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch conversations');
      }

      const data = await response.json();
      console.log(data.conversations)
      setConversations(data.conversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoadingConversations(false);
    }
  }

//   const handleSearchFocus = () => {
//     const params = new URLSearchParams(searchParams)
//     params.set('tab', 'search')
//     router.replace(`?${params.toString()}`)
//     setIsSearchOnFocus(true)
//   }

//   const handleSearchBlur = () => {
//     const params = new URLSearchParams(searchParams)
//     params.set('tab', DEFAULT_TAB)
//     router.replace(`?${params.toString()}`)
//     setIsSearchOnFocus(false)
//   }

  if (loadingConversations) {
    return (
      <div className="w-screen h-screen">
        <LogoLoading />
      </div>
    )
  }

  return (
    <div className='relative w-screen h-screen'>
      <header className={`w-full px-4 py-3 items-center justify-between border-b border-b-[#2c2c2c]
        ${isSearchOnFocus ? 'hidden' : 'flex'}  
      `}>
        <ChatNavbar />
      </header>

      <main className={`w-full px-2 
        ${isSearchOnFocus && 'absolute top-2 left-1/2 -translate-x-1/2'}
      `}>
        <div className='w-full px-2'>
          <ChatSearchBar
            // handleSearchFocus={handleSearchFocus}
            // handleSearchBlur={handleSearchBlur}
            isSearchOnFocus={isSearchOnFocus}
          />
        </div>

        {conversations.length > 0 ? (
          conversations.map((conversation) => {
            const oppUsername = conversation.conversation.members
              .find(member => member.user.username !== userInfo!.username)?.user.username || 'Unknown User';

            const oppMessages = conversation.conversation.messages.filter(msg => msg.senderId !== userInfo!.userId);

            const lastMessage = conversation.conversation.messages[0];
            const lastMessageTime = lastMessage ? new Date(lastMessage.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Unknown Time';

            return (
              <button
              onClick={() => {
                router.push(`/chat?c=${conversation.conversationId}`);
              }} 
              key={conversation.conversationId}
              className="flex items-center justify-between w-full h-16 px-2 py-2 cursor-pointer chat-container">
                <div className="flex items-center flex-1 h-full space-x-2">
                  <div className="flex items-center justify-center h-full rounded-full aspect-square">
                    <FaRegCircleUser className='text-5xl text-[#e0e0e0]' />
                  </div>
                  <div className="flex-1 h-full name-n-preview-container">
                    <div className="flex items-start pt-1 h-1/2">
                      <h1 className="font-roboto font-medium text-[#e0e0e0] text-sm">{oppUsername}</h1>
                    </div>
                    <div className="flex items-end pb-1 h-1/2">
                      <div className="flex items-center">
                        {lastMessage.senderId === userInfo!.userId && (
                          <span className="mr-[2px] chat-status">
                            <BsCheckAll className='text-lg text-[#e0e0e0]' />
                          </span>
                        )}
                        <p className="font-roboto font-normal text-[#888888] text-xs">
                          {lastMessage.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end h-full">
                  <div className="flex items-start pt-1 h-1/2">
                    <p className="font-sans font-light text-[#888888] text-xs">{lastMessageTime}</p>
                  </div>
                  <div className="flex items-end pb-1 h-1/2">
                    {lastMessage.senderId !== userInfo!.userId && (
                      <div className="relative flex items-center justify-center w-4 bg-green-400 rounded-full aspect-square">
                        <span className="absolute text-[#121212] text-[0.7rem] font-sans font-semibold">{oppMessages.filter(msg => msg.status !== 'SEEN').length}</span>
                      </div>
                    )}
                  </div>
                </div>
              </button>
            )
          })
        ) : (
          <div className=""></div>
        )}
      </main>
    </div>
  )
}

export default Conversations
