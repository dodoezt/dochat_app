'use client'
import React from 'react'

type props = {
    pfp_id: string
    username: string
}

const GeneratePfp: React.FC<props> = ({pfp_id, username}) => {
    return (
        <img src={`${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL}${pfp_id}${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL_END}`} alt={`${username} pfp`} className="object-cover w-full h-full" />
    )
}

export default GeneratePfp