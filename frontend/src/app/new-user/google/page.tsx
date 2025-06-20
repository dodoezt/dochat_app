'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Client, Account } from 'appwrite';
import { useRouter } from 'next/navigation';

import ConfirmPopUp from '@/components/mini-components/confirmPopUp';
import Overlay from '@/components/mini-components/overlay';
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider';

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);
const account = new Account(client);

const page = () => {
    const [loadings, setLoadings] = useState({
        usernameCheck: false,
    });
    const [isConfirmOpen, setIsConfirmOpen] = useState(false);
    const [buttonBlock, setButtonBlock] = useState(true);
    const [validationMsg, setValidationMsg] = useState<string | null>(null)
    const [isUsernameNotValid, setIsUsernameNotValid] = useState(false)

    const [googleUserInfo, setGoogleUserInfo] = useState({
        email_name: '',
        email: '',
    })
    
    const searchParams = useSearchParams();
    const redirect = searchParams.get('redirect') || '/';
    const router = useRouter();
    
    const [username, setUsername] = useState(googleUserInfo.email_name || '');

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        try {
            const user = await account.get();
            setGoogleUserInfo({
                email_name: user.name,
                email: user.email,
            })
        } catch (error) {
            console.log('error:', error);
        }
    }

    //NOTE : LANJUTIN UNTUK HAPUS OAUTH JIKA COOKIE DIHAPUS SECARA MANUAL ATAU COOKIE MENGHILANG

    const handleIsUsernameExists = async (username: string) => {
        if(buttonBlock) return
        try {
            setLoadings({ ...loadings, usernameCheck: true })
            const res = await fetch(`/api/is-username-exists?username=${username}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await res.json()

            if(data.exists) {
                alert('Username already exists')
            } else {
                setIsConfirmOpen(true)
            }
        } catch (error) {
            console.error('Error checking username:', error);
        } finally {
            setLoadings({ ...loadings, usernameCheck: false })
        }
    }

    const handleCreateAccount = async() => {
        try {
            const create = await fetch('/api/create-new-account/google', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    username : username,
                    email : googleUserInfo.email,
                    email_name : googleUserInfo.email_name,
                }),
            })

            const res = await create.json()

            if(!create.ok){
                alert(res.message)
                setIsConfirmOpen(false)
            } else (
                router.replace(redirect!)
            )
        } catch (error) {
            console.log(error)
        }
    }

    const handleUsernameValidation = (username: string) => {
        if(username.length === 0){
            setValidationMsg(null)
            setIsUsernameNotValid(false)
        }
        if(username.length < 5 && username.length !== 0) {
            setValidationMsg('Username must be at least 5 characters')
            setIsUsernameNotValid(true)
        } else if (username.length > 20) {
            setValidationMsg('Username must be less than 20 characters')
            setIsUsernameNotValid(true)
        } else {
            setValidationMsg(null)
            setIsUsernameNotValid(false)
        }
    }

    useEffect(() => {
        handleUsernameValidation(username)
        if(!isUsernameNotValid && username.length > 0) {
            setButtonBlock(false)
        } else {
            setButtonBlock(true)
        }
    }, [username, isUsernameNotValid])
    
    //NOTE : NANTI LANJUTKAN GOOGLE AUTHNYA

    return (
        <>
            <Overlay isOpen={isConfirmOpen}/>
            <div className="w-3/4 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[120]">
                <ConfirmPopUp 
                    isOpen={isConfirmOpen}
                    title="Are you sure?"
                    description={`Are you sure you wanna use "${username}" as your username?`}
                    onConfirm={() => {
                        handleCreateAccount();
                    }}
                    onCancel={() => {
                        setIsConfirmOpen(false)
                    }}
                />
            </div>
            <div className='flex items-center justify-center w-full h-screen'>
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
                            <div className="relative w-full h-8">
                                <input 
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                maxLength={20}
                                type='text' 
                                placeholder='Enter Username'
                                className={`appearance-none outline-none w-full h-full px-2 py-2 font-sans text-[#e0e0e0] text-xs border
                                transition-all ease-in-out duration-200 rounded-lg
                                ${isUsernameNotValid ? 'border-[#FF5E5E] focus:border-[#FF5E5E]' : 'border-[#2c2c2c] focus:border-[#e0e0e0]'}
                                `}/>
                                <div className="absolute w-auto h-full left-2 aspect-square">
                                </div>
                            </div>
                            <div className="w-full">
                                <p className={`font-sans text-[0.65rem] ${isUsernameNotValid ? 'text-[#FF5E5E]' : 'text-[#e0e0e0]'}`}>
                                    {validationMsg}
                                </p>
                            </div>
                        </div>
                        <div className="w-full">
                            <button 
                            onClick={() => {
                                handleIsUsernameExists(username) 
                            }}
                            className={`${buttonBlock ? 'brightness-[0.25] cursor-default' : 'brightness-100 cursor-pointer hover:bg-transparent hover:text-[#e0e0e0] '}
                            w-full bg-[#e0e0e0] font-sans font-medium rounded-lg py-1 px-1 transition-all ease-in-out duration-200 border border-[#e0e0e0]`}>
                                Create Account
                            </button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    )
}

export default page