'use client'
import React, { useEffect, useState } from 'react'
import {Account, Client} from 'appwrite'

import { MdNoAccounts } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { FaRegCircleUser } from "react-icons/fa6";

import { useUnifiedAuth } from '@/components/contexts/parents/authProvider';
import Overlay from '@/components/mini-components/overlay';
import { userInfoByGoogle } from '@/types/contexts';

type MenuProps = { 
    isProfileShown: boolean
    setIsProfileShown: (isShown: boolean) => void
    userInfo: userInfoByGoogle;
}

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client)

const Menu:React.FC<MenuProps> = ({isProfileShown, setIsProfileShown, userInfo}) => {
    const [loadings, setLoadings] = useState({
        getgoogleUserInfo: false,
    })

    const auth = useUnifiedAuth()
    const { provider } = auth;

    const handleLogOut = async() => {
        try {
            await account.deleteSession('current');
            window.location.reload()
        } catch (error) {
            console.log('error:', error);
        }
    }
    
    return (
        <>
            <Overlay isOpen={isProfileShown} setIsOpen={setIsProfileShown}/>
            <div
            onDrag={(e) => e.preventDefault()}
            className={`w-1/2 z-[100] fixed top-0 p-5 rounded-l-xl border border-[#2c2c2c] bg-[#121212] flex flex-col gap-3 transition-all duration-300 ease-in-out ${isProfileShown ? 'right-0' : '-right-full'}`}>
                <header className="flex items-center w-full gap-3">
                    {provider === null ? (
                        <>
                            <div className="aspect-square">
                                <MdNoAccounts className="text-3xl text-[#e0e0e0]"/>
                            </div>
                            <div className="flex-1">
                                <h1 className="font-sans font-medium text-[#e0e0e0] text-xs">You're not logged in yet.</h1>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="aspect-square">
                                <FaRegCircleUser className="text-3xl text-[#e0e0e0]"/>
                            </div>
                            <div className="flex-1">
                                <h1 className="font-sans font-medium text-[#e0e0e0] text-xs">{userInfo.username}</h1>
                                <h1 className="font-sans font-normal text-[#e0e0e0] text-xs">{userInfo.email}</h1>
                            </div>
                        </>
                    )}
                </header>
                <div className="flex items-center justify-center w-full">
                    <span className="h-[2px] rounded-full bg-[#2c2c2c] w-full"></span>
                </div>
                <main className="w-full space-y-2">
                    <div className="flex items-center w-full gap-1">
                        <TbMessage className="text-sm text-[#e0e0e0]"/>
                        <p className="font-sans font-medium text-xs text-[#e0e0e0]">Messages</p>
                    </div>
                    <div className="flex items-center w-full gap-1">
                        <TbMessage className="text-sm text-[#e0e0e0]"/>
                        <p className="font-sans font-medium text-xs text-[#e0e0e0]">Messages</p>
                    </div>
                    <div className="flex items-center w-full gap-1">
                        {provider !== null && 
                            <button onClick={handleLogOut} className="">logout</button>
                        }
                    </div>
                </main>
            </div>
        </>
    )
}

export default Menu