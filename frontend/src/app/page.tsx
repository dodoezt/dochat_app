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

const page = () => {
  const auth = useUnifiedAuth();
  const [loading, setLoading] = useState<boolean>(true)
  const [isSearchOnFocus, setIsSearchOnFocus] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const router = useRouter()
  const { provider } = auth;

  const tab = searchParams.get('tab')

  // Tunggu provider selesai diambil dari cookie
  useEffect(() => {
    if (provider === undefined) return;

    if (provider === null) {
      router.replace('/welcome');
    } else {
      setLoading(false);
    }
  }, [provider]);

  // Handle tab param & fokus search
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

  if (loading) {
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

        <div className="flex items-center justify-between w-full h-16 px-2 py-2 chat-container">
          <div className="flex items-center flex-1 h-full space-x-2">
            <div className="flex items-center justify-center h-full rounded-full aspect-square">
              <FaRegCircleUser className='text-5xl text-[#e0e0e0]' />
            </div>
            <div className="flex-1 h-full name-n-preview-container">
              <div className="flex items-start pt-1 h-1/2">
                <h1 className="font-roboto font-medium text-[#e0e0e0] text-sm">dodo ganteng</h1>
              </div>
              <div className="flex items-end pb-1 h-1/2">
                <div className="flex items-center">
                  <span className="chat-status">
                    <BsCheckAll className='text-lg text-[#888888]' />
                  </span>
                  <p className="font-roboto font-normal text-[#888888] text-xs">
                    woi jawajawa
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end h-full">
            <div className="items-start pt-1 h-1/2">
              <p className="font-sans font-light text-[#888888] text-xs">11:24 AM</p>
            </div>
            <div className="items-end pb-1 h-1/2">
              <div className="relative flex items-center justify-center w-4 bg-green-400 rounded-full aspect-square">
                <span className="absolute text-[#121212] text-[0.7rem] font-sans font-semibold">1</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
