'use client'
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { TagsType } from '@/lib/getTags'
import { UserType } from '@/app/api/users/public/route'

const page = ({params}: {params: any}) => {
    const [user, setUser] = useState<UserType | null>()
    const [tags, setTags] = useState<TagsType[] | undefined>()

    const getUser = async () => {
        const {username} = await params;
        try {
            const response = await fetch(`/api/users/public?username=${username}`, {
                method: 'GET'
            })

            const user = await response.json() as UserType | null
            setUser(user)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getTags = async() => {
        try {
            const response = await fetch('/api/tags', {
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

    return (
        <div className='flex flex-col items-center w-screen h-screen p-5'>
            <h1 className="font-sans text-white">{user?.username}</h1>
            <div className="flex">
                {user?.tags_used.map((tag_used, index) => {
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