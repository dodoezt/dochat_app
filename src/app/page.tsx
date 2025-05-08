'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Navbar from "@/components/seperated-component/home-page/navbar"
import Menu from '@/components/seperated-component/home-page/menu';
import { MdArrowOutward } from "react-icons/md";

const Home = () => {
  const [isProfileShown, setIsProfileShown] = useState(true)
  useEffect(() => {
    console.log('isProfileShown:', isProfileShown)
  }, [isProfileShown])

  return (
    <>
      <header className="w-full fixed top-0 z-10">
        <Navbar setIsProfileShown={setIsProfileShown}/>
      </header>
      <main className="w-full h-full flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center gap-3 pointer-default">
          <div className="">
            <h1 className="font-sans text-[#EAEAEA] text-4xl font-bold">
              Welcome to <span className="bg-[#e0e0e0] p-1 px-3 rounded-full text-[#121212] text-3xl">doChat</span>
            </h1>
          </div>
          <div className="">
            <h1 className="font-sans text-[#EAEAEA] text font-thin">
              A chatting platform powered by OpenAi.
            </h1>
          </div>
          <div className="">
            <Link
              href={'/login'}
              className="font-sans bg-[#e0e0e0] font-semibold text-[#121212] text-base px-3 py-2 rounded-full flex items-center cursor-pointer"><span className="mr-1"><MdArrowOutward className="text-xl"/></span>Get Started</Link>
          </div>
        </div>
      </main>
      <Menu isProfileShown={isProfileShown} setIsProfileShown={setIsProfileShown} />
    </>
  )
}

export default Home