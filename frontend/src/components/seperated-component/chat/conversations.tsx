'use client'
import React, { useEffect, useRef, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import socket from '@/lib/socket'
import { UseBoolean } from '@/hooks/useBoolean'

import ChatSearchBar from '@/components/seperated-component/chat/searchBar'
import ChatNavbar from '@/components/seperated-component/chat/navbar'
import LogoLoading from '@/components/loadings/logoLoading'
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider'

import { FaRegCircleUser } from "react-icons/fa6";
import { BsCheckAll } from "react-icons/bs";
import { MdAccountCircle } from 'react-icons/md'
import { IoMdPersonAdd } from "react-icons/io";

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
        userId: number,
        username: string,
        user_atribut: {
          pfp_id: string | null,
        }
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
  const [keyword, setKeyword] = useState<string>('')
  const [users, setUsers] = useState<any[] | null>(null)
  
  const [conversations, setConversations] = useState<ConversationListItem[]>([]);

  const [keywordDebounce] = useDebounce(keyword, 300)
  const searchLoading = UseBoolean()
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
    if(keyword.trim() === '')
    console.log(keyword)
    searchUsers(keyword)
  }, [keywordDebounce])

  useEffect(() => {
    searchLoading.setTrue();
    console.log(keyword)
  }, [keyword])

  useEffect(() => {
    getConversations()
  }, []);
  
  const searchUsers = async(keyword: string) => {
    searchLoading.setTrue()
    try {
      const response = await fetch(`/api/search?username=${keyword.trim()}`)

      const data = await response.json()
      setUsers(data.res)
      console.log('users:',data.res)
    } catch (error) {
      console.log(error)
    } finally {
      searchLoading.setFalse()
    }
  }

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

  const handleSearchFocus = () => {
    setIsSearchOnFocus(true)
  }

  const handleSearchBlur = () => {
    setIsSearchOnFocus(false)
  }

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
            handleSearchFocus={handleSearchFocus}
            handleSearchBlur={handleSearchBlur}
            keyword={keyword}
            setKeyword={setKeyword}
            isSearchOnFocus={isSearchOnFocus}
            searchLoading={searchLoading}
          />
          <div className={`w-full ${keyword.trim() === '' ? 'hidden' : 'block'}`}>
            {users?.length === 0 ? (
              <div className="flex justify-center w-full">
                <h1 className="m-auto mt-5 font-sans text-sm text-gray-700">
                  No user founded.
                </h1>
              </div>
            ): (
              users?.map((user, index) => (
                <div
                key={index} className="flex items-center justify-between w-full h-16 px-2 py-2">
                  <div className="flex h-full gap-3">
                    <div className="h-full aspect-square">
                      <button className="w-full h-full overflow-hidden rounded-full cursor-pointer">
                        {user.user_atribut.pfp_id ? (
                          <img src={`https://fra.cloud.appwrite.io/v1/storage/buckets/683bc8bf0001881c6cc5/files/${user.user_atribut.pfp_id}/view?project=681cbc230020279ce784`} alt={user.username} className={`w-full h-full transition-all ease-in-out duration-200`} />
                        ): (
                          <div className="flex items-center justify-center h-full aspect-square">
                            <MdAccountCircle className='text-5xl text-white'/>
                          </div>
                        )}
                      </button>
                    </div>
                    <div className="flex items-center h-full">
                      <h1 className="font-sans text-base text-white cursor-pointer">{user.username}</h1>
                    </div>
                  </div>
                  <button 
                  className="flex items-center h-full cursor-pointer">
                    <IoMdPersonAdd className='text-xl text-white'/>
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
        <div className={`w-full ${keyword.trim() !== '' ? 'hidden' : 'block'}`}>
          {conversations.length > 0 ? (
            conversations.map((conversation) => {
              const oppUser = conversation.conversation.members
                .find(member => member.user.userId !== userInfo.userId)?.user

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
                    {oppUser?.user_atribut.pfp_id ? (
                      <div className="flex items-center justify-center h-full overflow-hidden rounded-full aspect-square">
                        <img src={`https://fra.cloud.appwrite.io/v1/storage/buckets/683bc8bf0001881c6cc5/files/${oppUser.user_atribut.pfp_id}/view?project=681cbc230020279ce784`} alt={oppUser.username} className="w-full h-full" />
                      </div>                    
                    ): (
                      <div className="flex items-center justify-center h-full rounded-full aspect-square">
                        <FaRegCircleUser className='text-5xl text-[#e0e0e0]' />
                      </div>
                    )}
                    <div className="flex-1 h-full name-n-preview-container">
                      <div className="flex items-start pt-1 h-1/2">
                        <h1 className="font-roboto font-medium text-[#e0e0e0] text-sm">{oppUser?.username}</h1>
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
        </div>
      </main>
    </div>
  )
}

export default Conversations
