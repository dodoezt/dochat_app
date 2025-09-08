'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TagsType } from '@/lib/getTags'
import { UserPublicType } from '@/types/user'
import { UseBoolean } from '@/hooks/useBoolean'
import GeneratePfp from '@/functions/generatePfp'

import { MdAccountCircle } from "react-icons/md";

const page = ({params}: {params: any}) => {
    const router = useRouter()
    const [user, setUser] = useState<UserPublicType | null>()
    const [tags, setTags] = useState<TagsType[] | null>()
    const loading = UseBoolean(true)

    const getUser = async () => {
        const { username } = await params;
        try {
            const response = await fetch(`/api/v1/users/${username}`, {
                method: 'GET'
            })

            if(!response.ok) {
                router.push('/chat')
            }
            const user = await response.json() as UserPublicType | null
            setUser(user)
        } catch (error: any) {
            console.log(error.message)
            router.push('/chat')
        }
    }

    const getTags = async() => {
        try {
            const response = await fetch('/api/v1/tags', {
                method: 'GET'
            })

            const responseValue = await response.json()
            setTags(responseValue)
        } catch (error: any) {
            console.log(error.message)
        }        
    }

    useEffect(() => {
        getUser()
        getTags();
    }, [])

    useEffect(() => {
        if(user && tags) {
            loading.setFalse()
        }
    }, [user, tags])

    if(loading.value) {
        return (
            <div className='flex items-center justify-center w-screen h-screen'>
                <p className="text-white">loading</p>
            </div>
        )
    }
    return (
        <div className='flex flex-col items-center w-screen h-screen p-5'>
            <div className="flex flex-col items-center justify-center w-full">
                <div className="w-10 overflow-hidden rounded-full aspect-square">
                    <GeneratePfp pfp_id={user!.user_atribut.pfp_id!} username={user!.username}/>
                </div>
                <h1 className="font-sans text-white">{user?.username}</h1>
            </div>
            <div className="flex">
                {user?.user_atribut.tags_used && user.user_atribut.tags_used.map((tag_used, index) => {
                    const tag = tags?.filter(tag => tag.id === tag_used)[0]

                    return (
                        <div key={index} className="text-white">{tag?.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default page