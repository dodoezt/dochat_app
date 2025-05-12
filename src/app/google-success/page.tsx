'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useGoogleAuth } from '@/components/contexts/children/googleAuthcContext'

const page = () => {
    const router = useRouter()
    const { userInfo, getUser, getJwtToken } = useGoogleAuth()

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
    
    const checkUser = async () => {
        const isUserCreated = await handleIsUserCreated(userInfo.email)
        if (isUserCreated) {
            try {
                const jwtToken = await getJwtToken()
                const res = await fetch('/api/set-google-cookie', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        jwt: jwtToken,
                    }), 
                })
                if (!res.ok) {
                    alert('Failed to set cookie')
                }
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
        if (userInfo.email){
            checkUser()
        }
    }, [userInfo])

    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-1">
                <img src="/assets/doChatWhite.png" alt="logo-doChat" className="w-auto h-10 bg-[#e0e0e0] px-2 rounded-full animate-pulse" />
                <h1 className="font-sans text-[#e0e0e0] text-xs font-medium animate-pulse">loading...</h1>
            </div>
        </div>
    )
}

export default page