'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import ChatSearchBar from '@/components/seperated-component/chat/searchBar'
import ChatNavbar from '@/components/seperated-component/chat/navbar'
import LogoLoading from '@/components/loadings/logoLoading'
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider'

const page = () => {
  const auth = useUnifiedAuth();
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()

  //NOTE : PERBAIKI SETELAH LOGIN LANGSUNG GANTI PROVIDER

  const { provider } = auth;

  useEffect(() => {
    if(provider === null) {
      router.replace('/welcome')
    } else if (provider === 'google' || provider === 'whatsapp') {
      setLoading(false)
    }
  }, [provider])

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <LogoLoading />
      </div>
    )
  }

  return (
    <div className='w-screen h-screen'>
      <header className="w-full px-4 py-3 flex items-center justify-between border-b border-b-[#2c2c2c]">
        <ChatNavbar />
      </header>
      <main className="w-full">
        <div className="w-full px-5">
          <ChatSearchBar />
        </div>
      </main>
    </div>
  )
}

export default page
