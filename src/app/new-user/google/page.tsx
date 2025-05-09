'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Client, Account } from 'appwrite';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const page = () => {
    const [userInfo, setUserInfo] = useState({
        username: '',
        email: '',
        createdAt: '',
    })
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect');

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await account.get();
                setUserInfo({
                    username: user.name,
                    email: user.email,
                    createdAt: user.$createdAt.slice(0, 19).replace('T', ' '),
                })
            } catch (error) {
                console.log('error:', error);
            }
        }
        getUser()
    }, [])

    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
         <div className='w-full h-screen flex justify-center items-center'>
            <div className="w-3/4 p-5 border border-[#e0e0e0] rounded space-y-2">
                <header className="w-full py-2 border-b border-b-[#2c2c2c] flex flex-col items-center justify-center gap-2">
                    <div className="flex flex-col items-center">
                        <img src="/assets/doChat.svg" alt="logo-doChat" className="w-auto h-10 bg-[#e0e0e0] px-2 rounded-full" />
                    </div>
                    <h1 className="font-sans text-[#e0e0e0] font-medium">Looks like you're new here.</h1>
                </header>
                <main className="w-full space-y-5">
                    <div className="w-full gap-1">
                        <label htmlFor="username" className="font-sans text-[#e0e0e0] text-[0.65rem]">What you'd like to be called?</label>
                        <div className="w-full relative">
                            <input 
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={(e) => setUserInfo({ ...userInfo, username: e.target.value })}
                            type='text' 
                            placeholder='Enter Username'
                            className="appearance-none outline-none w-full px-2 py-2 font-sans text-[#e0e0e0] text-xs border border-[#2c2c2c]
                            transition-all ease-in-out duration-200 focus:border-[#e0e0e0] rounded-lg"/>
                        </div>
                    </div>
                    <div className="w-full">
                        <button className="w-full bg-[#e0e0e0] font-sans font-medium rounded-lg py-1 px-1 cursor-pointer transition-all ease-in-out duration-200 border border-[#e0e0e0] hover:bg-transparent hover:text-[#e0e0e0]">
                            Create Account
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default page