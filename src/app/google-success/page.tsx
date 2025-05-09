'use client'
import React, { useEffect, useState } from 'react'
import { Client, Account } from 'appwrite'
import { useRouter } from 'next/navigation'

const client = new Client()
.setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
.setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);

const page = () => {
    const router = useRouter()
    const [user, setUser] = useState({
        name: '',
        email: '',
        createdAt: '',
    })

    const getUser = async () => {
        try {
            const user = await account.get();
            setUser({
                name: user.name,
                email: user.email,
                createdAt: user.$createdAt.slice(0, 19).replace('T', ' '),
            })
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    }

    //# LANJUTKANN EMAIL AUTH   

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
        const isUserCreated = await handleIsUserCreated(user.email)
        if (isUserCreated) {
            router.replace('/')
        } else {
            router.replace(`/new-user/google?redirect=/`)
        }
    }
    
    useEffect(() => {
        getUser()
    }, [])

    useEffect(() => {
        if (user.email){
            checkUser()
        }
    }, [user])

    return (
        <div className=""></div>
    )
}

export default page