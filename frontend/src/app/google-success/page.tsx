'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Client, Account } from 'appwrite'

import { useGlobalContext } from '@/components/contexts/parents/globalProvider'
import LogoLoading from '@/components/loadings/logoLoading'

const client = new Client()
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
    .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const page = () => {
    const [googleUserInfo, setGoogleUserInfo] = useState({
        email_name: '',
        email: '',
    })

    const router = useRouter()

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

    const handleIsUserCreated = async (email: string) => {
        const res = await fetch(`/api/v1/users/check-email?email=${email}`, {
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
                const response = await fetch('/api/v1/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email }),
                })

                if (response.ok) {
                    window.location.href = '/'
                }
                else alert('theres a problem')
            } catch (error) {
                console.log('error:', error)
            }
        } else {
            router.push(`/new-user/google?redirect=/`)
        }
    }

    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (googleUserInfo!.email) {
            checkUser(googleUserInfo!.email)
        }
    }, [googleUserInfo!.email])

    return (
        <div className="w-screen h-screen">
            <LogoLoading />
        </div>
    )
}

export default page