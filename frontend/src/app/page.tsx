'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import ChatSearchBar from '@/components/seperated-component/chat/searchBar'
import ChatNavbar from '@/components/seperated-component/chat/navbar'
import LogoLoading from '@/components/loadings/logoLoading'
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider'

import { FaRegCircleUser } from "react-icons/fa6";
import { BsCheckAll } from "react-icons/bs";

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
      status: 'NOT_DELIVERED' | 'DELIVERED' | 'READ';
      senderId: number;
      conversationId: string;
    }[];
  };
  userId: number;
  conversationId: string;
  joinedAt: Date;
};


const page = () => {
  const auth = useUnifiedAuth();
  const [loading, setLoading] = useState<boolean>(true)
  const [isSearchOnFocus, setIsSearchOnFocus] = useState<boolean>(false)
  const [loadingConversations, setLoadingConversations] = useState<boolean>(true)
  
  const [conversations, setConversations] = useState<ConversationListItem[]>([]);

  const searchParams = useSearchParams()
  const router = useRouter()
  const { provider, userInfo } = auth;

  const tab = searchParams.get('tab')
  
  useEffect(() => {
    if (provider === undefined) return;
    
    if (provider === null) {
      router.replace('/welcome');
    } else {
      setLoading(false);
    }
  }, [provider]);
  
  useEffect(() => {
    if(userInfo?.userId) {
      getConversations()
    }
  }, [userInfo!.userId]);

  useEffect(() => {
    if (loading) return;

    if (!tab || !VALID_TABS.includes(tab)) {
      const params = new URLSearchParams(searchParams)
      params.set('tab', DEFAULT_TAB)
      router.replace(`?${params.toString()}`)
    }

    if (tab === 'search') {
      setIsSearchOnFocus(true)
    }
  }, [loading, tab]);

  const getConversations = async () => {
    setLoadingConversations(true);
    try {
      const response = await fetch('/api/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userInfo!.userId }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch conversations');
      }

      const data = await response.json();
      setConversations(data.conversations);
      console.log('Conversations:', data.conversations);
    } catch (error) {
      console.error('Error fetching conversations:', error);
    } finally {
      setLoadingConversations(false);
    }
  }

  const handleSearchFocus = () => {
    const params = new URLSearchParams(searchParams)
    params.set('tab', 'search')
    router.replace(`?${params.toString()}`)
    setIsSearchOnFocus(true)
  }

  const handleSearchBlur = () => {
    const params = new URLSearchParams(searchParams)
    params.set('tab', DEFAULT_TAB)
    router.replace(`?${params.toString()}`)
    setIsSearchOnFocus(false)
  }

  if (loading || loadingConversations) {
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
            handleSearchFocus={handleSearchFocus}
            handleSearchBlur={handleSearchBlur}
            isSearchOnFocus={isSearchOnFocus}
          />
        </div>

        {conversations.length > 0 ? (
          conversations.map((conversation) => {
            const oppUsername = conversation.conversation.members
              .find(member => member.user.username !== userInfo!.username)?.user.username || 'Unknown User';

            const lastMessage = conversation.conversation.messages[0];
            const lastMessageTime = lastMessage ? new Date(lastMessage.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Unknown Time';

            return (
              <button
              onClick={() => {
                router.push(`/chat?convId=${conversation.conversationId}`);
              }} 
              key={conversation.conversationId}
              className="flex items-center justify-between w-full h-16 px-2 py-2 chat-container">
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
                        <span className="absolute text-[#121212] text-[0.7rem] font-sans font-semibold">{conversation.conversation.messages.length}</span>
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

export default page
