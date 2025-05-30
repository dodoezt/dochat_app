'use client'
import React, { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import ChatSearchBar from '@/components/seperated-component/chat/searchBar'
import ChatNavbar from '@/components/seperated-component/chat/navbar'
import LogoLoading from '@/components/loadings/logoLoading'
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider'

import { FaRegCircleUser } from "react-icons/fa6";
import { IoCheckmarkDoneOutline, IoCheckmark } from "react-icons/io5";

const VALID_TABS = ['chat', 'search']
const DEFAULT_TAB = 'chat'

const page = () => {
  const auth = useUnifiedAuth();
  const [loading, setLoading] = useState<boolean>(true)
  const [isSearchOnFocus, setIsSearchOnFocus] = useState<boolean>(false)

  const searchParams = useSearchParams()
  const router = useRouter()

  const { provider } = auth;

  useEffect(() => {
    if(provider === null) {
      router.replace('/welcome')
    } else if (provider === 'google' || provider === 'whatsapp') {
      setLoading(false)
    }
  }, [provider])

  const tab = searchParams.get('tab')

  useEffect(() => {
    if(!tab || !VALID_TABS.includes(tab)){
      const params = new URLSearchParams(searchParams)
      params.set('tab', DEFAULT_TAB)
      router.replace(`?${params.toString()}`)
    }

    if(tab === 'search'){
      setIsSearchOnFocus(true)
    }
  }, [])

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

  //NOTE : PERBAIKI SETELAH LOGIN LANGSUNG GANTI PROVIDER

  if (loading || !tab) {
    return (
      <div className="w-screen h-screen">
        <LogoLoading />
      </div>
    )
  }

  return (
    <div className='w-screen h-screen relative'>
      <header className={`w-full px-4 py-3 items-center justify-between border-b border-b-[#2c2c2c]
      ${isSearchOnFocus ? 'hidden' : 'flex'}  
      `}>
        <ChatNavbar />
      </header>
      <div className={`w-full px-3 
                      ${isSearchOnFocus && 'absolute top-2 left-1/2 -translate-x-1/2'}
                    `}>
        <ChatSearchBar handleSearchFocus={handleSearchFocus} handleSearchBlur={handleSearchBlur} isSearchOnFocus={isSearchOnFocus}/>
      </div>
      <main className="w-full">
        <div className="w-full h-16 px-3 py-2 flex items-center justify-between">
          <div className="h-full flex items-center space-x-2">
            <div className="aspect-square h-full rounded-full flex items-center justify-center">
              <FaRegCircleUser className='text-5xl text-[#e0e0e0]'/>
            </div>
            <div className="flex flex-col h-full content-between">
              <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">dodo ganteng</h1>
              <p className="font-sans font-normal text-[#888888] text-xs flex"><span className=""><IoCheckmarkDoneOutline className='text-lg text-[#888888]'/></span> woi jawajawa</p>
            </div>
          </div>
          <div className="h-full flex items-start">
            <p className="font-sans font-light text-[#888888] text-xs">11:24 AM</p>
          </div>
        </div>
        <div className="w-full h-16 px-3 py-2 flex items-center justify-between">
          <div className="h-full flex items-center space-x-2">
            <div className="aspect-square h-full rounded-full flex items-center justify-center">
              <FaRegCircleUser className='text-5xl text-[#e0e0e0]'/>
            </div>
            <div className="flex flex-col h-full content-between">
              <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">sayang</h1>
              <p className="font-sans font-normal text-[#888888] text-xs flex"><span className=""><IoCheckmarkDoneOutline className='text-lg text-cyan-400'/></span> iahh bub</p>
            </div>
          </div>
          <div className="h-full flex items-start">
            <p className="font-sans font-light text-[#888888] text-xs">11:24 AM</p>
          </div>
        </div>
        <div className="w-full h-16 px-3 py-2 flex items-center justify-between">
          <div className="h-full flex items-center space-x-2">
            <div className="aspect-square h-full rounded-full flex items-center justify-center">
              <FaRegCircleUser className='text-5xl text-[#e0e0e0]'/>
            </div>
            <div className="flex flex-col h-full content-between">
              <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">Kairi (Rival)</h1>
              <p className="font-sans font-normal text-[#888888] text-xs">-1 jungler do </p>
            </div>
          </div>
          <div className="h-full flex flex-col items-start justify-end gap-2">
            <p className="font-sans font-light text-[#888888] text-xs">11:24 AM</p>
            <div className="aspect-square rounded-full bg-green-400 flex items-center justify-center text-xs font-medium">1</div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default page
