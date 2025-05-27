'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from "@/components/seperated-component/home-page/navbar"
import Menu from '@/components/seperated-component/home-page/menu';
import { MdArrowOutward } from "react-icons/md";

import { useUnifiedAuth } from '@/components/contexts/parents/authProvider';
import LogoLoading from '@/components/loadings/logoLoading';

const Home = () => {
  const [isProfileShown, setIsProfileShown] = useState(false)
  const [loading, setLoading] = useState(true)
  const auth = useUnifiedAuth()
  const { userInfo } = auth;

  useEffect(() => {
    console.log('userInfo:', userInfo)
    if(userInfo?.username){
      setLoading(false)
    }
  }, [userInfo])

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <LogoLoading />
      </div>
    )
  }
  
  if (!auth.provider) {
    return (
      <>
        <header className="w-full fixed top-0 z-10">
          <Navbar setIsProfileShown={setIsProfileShown}/>
        </header>
        <main className="w-full h-full flex flex-col justify-center items-center">
          <div className="flex flex-col items-center justify-center gap-3 pointer-default">
            <div className="">
              <h1 className="font-roboto font-bold text-[#EAEAEA] text-4xl">
                Welcome to <span className="bg-[#e0e0e0] p-1 px-3 rounded-full font-sans text-[#121212] text-3xl">doChat</span>
              </h1>
            </div>
            <div className="">
              <h1 className="font-roboto font-extralight text-[#EAEAEA] text">
                A chatting platform powered by OpenAi.
              </h1>
            </div>
            <div className="">
              <Link
                href={'/login'}
                className="font-roboto bg-[#e0e0e0] font-semibold text-[#121212] text-base px-3 py-2 rounded-full flex items-center cursor-pointer">
                  <span className="mr-1">
                    <MdArrowOutward className="text-xl"/>
                  </span>
                  Get Started
              </Link>
            </div>
          </div>
        </main>
        <Menu isProfileShown={isProfileShown} setIsProfileShown={setIsProfileShown} userInfo={userInfo!}/>
      </>
    )
  }

  return (
    <>
      <header className="w-full fixed top-0 z-10">
        <Navbar setIsProfileShown={setIsProfileShown}/>
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-3 pointer-default">
          <div className="">
            <h1 className="font-roboto font-bold text-[#EAEAEA] text-4xl">
              Welcome to <span className="bg-[#e0e0e0] p-1 px-3 rounded-full font-sans text-[#121212] text-3xl">doChat</span>
            </h1>
          </div>
          <div className="">
            <h1 className="font-roboto font-extralight text-[#EAEAEA] text">
              A chatting platform powered by OpenAi.
            </h1>
          </div>
          <div className="">
            <Link
              href={'/login'}
              className="font-roboto bg-[#e0e0e0] font-semibold text-[#121212] text-base px-3 py-2 rounded-full flex items-center cursor-pointer">
                <span className="mr-1">
                  <MdArrowOutward className="text-xl"/>
                </span>
                Get Started
              </Link>
          </div>
        </div>
      </main>
      <Menu isProfileShown={isProfileShown} setIsProfileShown={setIsProfileShown} userInfo={userInfo!}/>
    </>
  )
}

export default Home