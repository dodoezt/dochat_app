'use client'
import React, { useState } from 'react'
import { MdNoAccounts } from "react-icons/md";
import { TbMessage } from "react-icons/tb";

import Overlay from '@/components/mini-components/overlay';
import { useUnifiedAuth } from '@/components/contexts/parents/unifiedAuthContexts';

type MenuProps = { 
    isProfileShown: boolean
    setIsProfileShown: (isShown: boolean) => void
}

const Menu:React.FC<MenuProps> = ({isProfileShown, setIsProfileShown}) => {
    const [loadings, setLoadings] = useState({
        getUserInfo: false,
    })

    // const auth = useUnifiedAuth()

    // if (!auth) setLoadings({ ...loadings, getUserInfo: true })
    
    // if (loadings.getUserInfo) return (<h1 className='font-sans text-[#e0e0e0]'>Loading...</h1>)
    
    // const { userInfo } = auth;

    return (
        <>
            <Overlay isOpen={isProfileShown} />
            <div className={`w-1/2 z-[100] fixed top-0 p-5 rounded-l-xl border border-[#2c2c2c] bg-[#121212] flex flex-col gap-3 transition-all duration-300 ease-in-out ${isProfileShown ? 'right-0' : '-right-full'}`}>
                <header className="w-full flex items-center gap-3">
                    {/* {1 === 1 ? (
                        <div className=""></div>
                    ) : ( */}
                        <>
                            <div className="aspect-square">
                                <MdNoAccounts className="text-3xl text-[#e0e0e0]"/>
                            </div>
                            <div className="flex-1">
                                <h1 className="font-sans font-medium text-[#e0e0e0] text-xs">You're not logged in yet.</h1>
                            </div>
                        </>
                    {/* )} */}
                </header>
                <div className="w-full flex items-center justify-center">
                    <span className="h-[2px] rounded-full bg-[#2c2c2c] w-full"></span>
                </div>
                <main className="w-full space-y-2">
                    <div className="w-full flex items-center gap-1">
                        <TbMessage className="text-sm text-[#e0e0e0]"/>
                        <p className="font-sans font-medium text-xs text-[#e0e0e0]">Messages</p>
                    </div>
                    <div className="w-full flex items-center gap-1">
                        <TbMessage className="text-sm text-[#e0e0e0]"/>
                        <p className="font-sans font-medium text-xs text-[#e0e0e0]">Messages</p>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Menu