'use client'
import React, { useEffect, useRef, useState, useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDebounce } from 'use-debounce'
import socket from '@/lib/socket'
import { UseBoolean } from '@/hooks/useBoolean'
import { RoundSpinner, Spinner } from '@/components/ui/spinner'

import ChatSearchBar from '@/components/seperated-component/chat/searchBar'
import ChatNavbar from '@/components/seperated-component/chat/navbar'
import LogoLoading from '@/components/loadings/logoLoading'
import { useAuthContext } from '@/components/contexts/children/authContext'
import { useChatContext } from '@/components/contexts/children/chatContext'

import { FaRegCircleUser } from "react-icons/fa6";
import { BsCheck, BsCheckAll } from "react-icons/bs";
import { MdAccountCircle } from 'react-icons/md'
import { IoMdPersonAdd } from "react-icons/io";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoChatboxEllipses } from "react-icons/io5";
import { produce } from 'immer'
import { friendshipsType } from '@/types/contexts'

const VALID_TABS = ['chat', 'search']
const DEFAULT_TAB = 'chat'

type props = {
  
}

const Conversations:React.FC<props> = ({}) => {
  const [isSearchOnFocus, setIsSearchOnFocus] = useState<boolean>(false)
  const [keyword, setKeyword] = useState<string>('')
  const [users, setUsers] = useState<any[] | null>(null)
  
  const [keywordDebounce] = useDebounce(keyword, 500)
  const searchLoading = UseBoolean()
  const router = useRouter()

  const { friendships, setFriendships, friendConnections } = useAuthContext()
  const { userInfo, conversations } = useChatContext();

  const [loadingAddUser, setLoadingAddUser] = useState<number | null>(null)
  
  const { onlineUsers } = useAuthContext()
  
  //  TESTING USEEFFECT
  // useEffect(() => {
  //     getCachedConversations()
  // }, []);

  //  TESTING USEEFFECT

  useEffect(() => {
    if(keyword.trim() === '') return;
    searchUsers(keyword)
  }, [keywordDebounce])

  // const getCachedConversations = async () => {
  //   loadingCachedConversations.setTrue()
  //   try {
  //     const response = await fetch('/api/v1/caches/conversations', {
  //       method: 'GET',
  //     });

  //     const data = await response.json();
  //     setConversations(data.conversations);
  //   } catch (error) {
  //     console.error('Error fetching cached conversations:', error);
  //   } finally {
  //     loadingCachedConversations.setFalse();
  //     getConversations();
  //   }
  // }
  
  // const getConversations = async () => {
  //   loadingConversations.setTrue()
  //   try {
  //       const response = await fetch('/api/v1/users/me/conversations', {
  //       method: 'POST',
  //       headers: {
  //           'Content-Type': 'application/json',
  //       },
  //       credentials: 'include',
  //       });

  //       const data = await response.json();
  //       setConversations(data.conversations);
  //   } catch (error) {
  //       console.error('Error fetching conversations:', error);
  //   } finally {
  //       loadingConversations.setFalse();
  //   }
  // }

  async function handleAddFriend (toUserId: number) {
    if(loadingAddUser) return;
    setLoadingAddUser(toUserId)
    try {
      const response = await fetch('/api/v1/friendships', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ toUserId }),
        credentials: 'include',
      })
      const { data, isExisted } = await response.json()

      if(response.ok && !isExisted) {
        setFriendships(prev => 
          produce(prev, draft => {
            if(draft) draft.push(data)
            return draft
          }
        ))

        socket.emit('friend:request:sent', {
          toUserId: toUserId,
          friendshipId: data.id, 
          from: {
            userId: userInfo.userId,
            username: userInfo.username,
            user_atribut: {
              pfp_id: userInfo.user_atribut.pfp_id
            }
          }
        })
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoadingAddUser(null)
    }
  }

  const renderMessageStatus = (status: string) => {
    switch (status) {
      case 'NOT_DELIVERED':
        return <BsCheck className="text-lg text-[#e0e0e0]" />; // ⏰ belum terkirim
      case 'DELIVERED':
        return <BsCheckAll className="text-lg text-[#e0e0e0]" />; // ✓ terkirim
      case 'SEEN':
        return <BsCheckAll className="text-lg text-blue-500" />; // ✓✓ terbaca
      default:
        return null;
    }
  };

  
  const searchUsers = async(keyword: string) => {
    if (keyword.trim() === '') {
      setUsers(null)
      return;
    }
    searchLoading.setTrue()
    try {
      const response = await fetch(`/api/v1/search/${keyword}`, {
        method: 'GET',
      })

      const data = await response.json()
      setUsers(data.res)
      console.log('users:',data.res)
    } catch (error) {
      console.log(error)
    } finally {
      searchLoading.setFalse()
    }
  }

  const handleStartConversation = async (toUserId: number) => {
    try {
      const response = await fetch('/api/v1/conversations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(toUserId),
        credentials: 'include',
      })

      if(response.ok){
        const data = await response.json();
        console.log('conversation created:', data)
        router.push(`/chat/c/${data.conversationId}`);
      }
    } catch (error) {
      console.error('Error starting conversation:', error); 
    }
  }

  const handleSearchFocus = () => {
    setIsSearchOnFocus(true)
  }

  const handleSearchBlur = () => {
    setIsSearchOnFocus(false)
  }

  const addedPeople = useMemo(() => {
    if(!friendships || !userInfo) return []
    return friendships
      .filter(friendship => friendship.status === 'pending')
      .map(friendship => {
          if (friendship.userId === userInfo.userId) {
              return {
                  friendshipId: friendship.id,
                  friend: friendship.users_friendships_friendIdTousers
              }
          } else if (friendship.friendId === userInfo.userId) {
              return null
          }
          return null
      })
      .filter(Boolean)
  }, [friendships, userInfo])

  const filteredSearchedUsers = useMemo(() => {
    if(!users || !userInfo) return null;
    return users.filter(user => user.userId !== userInfo.userId)
  }, [users, userInfo, keyword])

  if(!conversations || !userInfo || !friendships) return null

  return (
    <div className='relative w-screen h-screen'>
      <header className={`w-full px-4 py-3 items-center justify-between border-b border-b-[#2c2c2c]
        ${isSearchOnFocus ? 'hidden' : 'flex'}  
      `}>
        <ChatNavbar userInfo={userInfo}/>
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
            {filteredSearchedUsers?.length === 0 ? (
              <div className="flex justify-center w-full">
                <h1 className="m-auto mt-5 font-sans text-sm text-gray-700">
                  No user found.
                </h1>
              </div>
            ): (
              filteredSearchedUsers?.map((user, index) => {
                const isAdded = friendships.some(f => f.userId === userInfo.userId && f.friendId === user.userId && f.status === 'pending')
                return (
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
                        <h1 className="font-sans text-lg text-white cursor-pointer">{user.username}</h1>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                      onClick={() => handleStartConversation(user.userId)} 
                      className="flex items-center justify-center h-full cursor-pointer">
                        <IoChatboxEllipses className='text-xl text-white'/>
                      </button>
                      <button 
                        onClick={() => handleAddFriend(user.userId)}
                        disabled={loadingAddUser === user.userId || isAdded}
                        className={`flex items-center justify-center h-full ${
                            loadingAddUser === user.userId || isAdded ? 'cursor-default' : 'cursor-pointer'
                        }`}
                      >
                        {loadingAddUser === user.userId ? (
                            <RoundSpinner size="sm" />
                        ) : isAdded ? (
                            <IoCheckmarkOutline className='text-xl text-white'/>
                        ) : (
                            <IoMdPersonAdd className='text-xl text-white'/>
                        )}
                    </button>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
        <div className={`w-full ${keyword.trim() !== '' ? 'hidden' : 'block'}`}>
          {conversations && conversations.length > 0 ? (
            conversations.slice().sort((a,b) => {
              const aTime = a.conversation.messages[0]?.sentAt || 0
              const bTime = b.conversation.messages[0]?.sentAt || 0

              return new Date(bTime).getTime() - new Date(aTime).getTime()
            })
            .map((conversation) => {
              if(conversation.conversation.messages.length === 0) return null;
              const oppUser = conversation.conversation.members
                .find(member => member.user.userId !== userInfo.userId)?.user

              const oppMessages = conversation.conversation.messages.filter(msg => msg.senderId !== userInfo!.userId) || [];
              const unSeenOppMessages = oppMessages.filter(msg => msg.status !== 'SEEN') || []

              const lastMessage = conversation.conversation.messages?.[0];
              const lastMessageTime = lastMessage ? new Date(lastMessage.sentAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : 'Unknown Time';


              return (
                <button
                onClick={() => {
                  router.push(`/chat/c/${conversation.conversationId}`);
                }} 
                key={conversation.conversationId}
                className="flex items-center justify-between w-full h-16 px-2 py-2 transition-all duration-200 ease-in-out cursor-pointer chat-container hover:bg-[rgba(0,0,0,0.2)]">
                  <div className="flex items-center flex-1 h-full space-x-2">
                    <div className="relative h-full">
                      {oppUser?.user_atribut.pfp_id ? (
                        <div className="flex items-center justify-center h-full overflow-hidden rounded-full aspect-square">
                          <img src={`https://fra.cloud.appwrite.io/v1/storage/buckets/683bc8bf0001881c6cc5/files/${oppUser.user_atribut.pfp_id}/view?project=681cbc230020279ce784`} alt={oppUser.username} className="w-full h-full" />
                        </div>                    
                      ): (
                        <div className="flex items-center justify-center h-full rounded-full aspect-square">
                          <FaRegCircleUser className='text-5xl text-[#e0e0e0]' />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 h-full name-n-preview-container">
                      <div className="flex items-center gap-1 pt-1 h-1/2">
                        <h1 className="font-roboto font-medium text-[#e0e0e0] text-sm">{oppUser?.username}</h1>
                      </div>
                      <div className="flex items-end pb-1 h-1/2">
                        <div className="flex items-center">
                          {lastMessage && lastMessage.senderId === userInfo!.userId && (
                            <span className="mr-[2px] chat-status">
                              {renderMessageStatus(lastMessage.status!)}
                            </span>
                          )}
                          <p className="font-roboto font-normal text-[#888888] text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-[140px]">
                            {lastMessage ? lastMessage.content : 'No messages yet'}
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
                      {lastMessage && lastMessage.senderId !== userInfo!.userId && unSeenOppMessages.length !== 0 && (
                        <div className="relative flex items-center justify-center w-4 bg-green-400 rounded-full aspect-square">
                          <span className="absolute text-[#121212] text-[0.7rem] font-sans font-semibold">{unSeenOppMessages.length}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              )
            })
          ) : (
            <div className="flex items-center justify-center w-full">
              <div className="flex flex-col items-center justify-center gap-2 mt-5">
                <h1 className="font-sans text-sm text-gray-600">NO conversation found yet.</h1>
                <h1 className="text-sm font-medium text-white font-sanss font sans">Search some friends and start yap.</h1>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default Conversations
