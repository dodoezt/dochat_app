'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider'

const page = () => {
    const router = useRouter()
    const auth = useUnifiedAuth()

    if(auth?.provider !== 'google') return null

    const {getUser, googleUserInfo} = auth;

    const handleIsUserCreated = async (email: string) => {
        const res = await fetch(`/api/is-user-created?email=${email}`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await res.json()
        return data.exists
    }
    
    const checkUser = async (email: string) => {
        const isUserCreated = await handleIsUserCreated(email)
        if (isUserCreated) {
            try {
                const res = await fetch('api/login/google', {
                    method: 'POST',
                    headers : {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({email : email})
                })
            } catch (error) {
                console.log('error:', error);
            } finally { 
                router.replace('/')
            }
        } else {
            router.replace(`/new-user/google?redirect=/`)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (googleUserInfo.email){
            checkUser(googleUserInfo.email)
        }
    }, [googleUserInfo])

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            {/* Structure */}
            <div className="w-20 h-20 relative flex items-center justify-center animate-pulse">
                {/* top and half right */}
                <div className="absolute w-[4.8rem] h-20 border-t-[8px] border-white rounded-r-full rounded-l-lg -z-[21]"></div>
                {/* c shape  */}
                <div className="aspect-square h-[2.6rem] relative -translate-y-[4px] -translate-x-[2px] transition-all ease-in-out">
                    <div className="aspect-square h-[2.6rem] border-[7px] border-white rounded-full"></div>
                    {/* c masking  */}
                    <div className="w-6 h-4 bg-[#121212] absolute right-0 top-1/2 -translate-y-1/2 flex flex-col justify-between translate-x-[1px]">
                        <div className="aspect-video h-2 bg-[#121212] -rotate-45"></div>
                        <div className="aspect-video h-2 bg-[#121212] rotate-45"></div>
                    </div>
                </div>
                {/* left big line  */}
                <div className="h-[110%] w-full absolute left-0 top-0 border-l-white border-l-[8px] z-10"></div>
                {/* tail  */}
                <div className="-z-[2] absolute left-[1px] bottom-[3px] bg-white h-[7px] w-7 -rotate-[45deg] -translate-y-1"></div>
                
                {/* Maskings  */}
                <div className="z-20 absolute h-[8px] w-7 bg-[#121212] -bottom-[5px] left-0 -rotate-45"></div>
                <div className="absolute bottom-[16.9px] left-[6px] h-[7.5px] w-4 bg-[#121212] -rotate-[45deg] translate-y-[1px]"></div>
                <div className="-z-[17] bg-[#121212] w-8 h-[3.3rem] absolute top-[8px] left-[8px]"></div>
                <div className="-z-[18] w-18 h-18 rounded-full border-[8px] border-white absolute right-1 top-0"></div>
                <div className="-z-[1] aspect-square h-[2.6rem] rounded-full absolute bg-[#121212] translate-y-[3px] -translate-x-[4px]"></div>
                <div className="-z-[19] bg-[#121212] aspect-square w-[4.6rem] h-10 absolute right-0 bottom-0 translate-x-1"></div>
                <div className="-z-[19] bg-[#121212] aspect-square w-1/2 h-10 absolute right-0 top-0 translate-x-1"></div>
            </div>

            {/* Animations element 
            <div className="w-20 h-22 fixed">
                <div className="w-full h-full">
                    left big line
                    <div className="z-[50] absolute left-0 w-[8px] bg-[#121212] translate-y-1 left-line-grow-animate"></div>

                    <div className="z-[50] bg-[yellow] absolute top-[1px] left-[8px] w-[40px] h-[12px]"></div>
                    <div className="z-[50] bg-[yellow] absolute top-[12px] left-[40px] w-[40px] h-[12px] rotate-45"></div>
                    <div className="z-[50] bg-[yellow] absolute top-[45px] -right-[8px] w-[40px] h-[12px] -rotate-[75deg]"></div>
                    <div className="z-[50] bg-[yellow] absolute bottom-[12px] right-[14px] w-[42px] h-[8px]"></div>
                </div>
            </div> */}
        </div>
    )
}

export default page