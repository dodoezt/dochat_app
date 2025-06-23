'use client'
import { account, storage, ID, Permission, Role } from '@/lib/appwrite/appwrite'
import { useEffect, useState } from 'react'

const page = () => {
    const [fileId, setFileId] = useState<string | null>(null)
    const [userInfo, setUserInfo] = useState<any | null>(null)

    useEffect(() => {
        getUser()
    }, [])

    const handleUpload = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(!file) return

        try {
            const result = await storage.createFile(
                process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID!,
                ID.unique(),
                file,
                // [
                //     Permission.read(Role.any()),
                //     Permission.write(Role.user('userId')),
                //     Permission.delete(Role.user('userId'))
                // ]
            )
            setFileId(result.$id)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getUser = async() => {
        const response = await fetch('/api/users/get-user/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'applications/json'
            },
            credentials: 'include'
        })

        const data = await response.json()
        setUserInfo(data.user)
    }

    if(!userInfo) return null

    return (
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen text-white">
                {fileId && (
                    <img src={`https://fra.cloud.appwrite.io/v1/storage/buckets/683bc8bf0001881c6cc5/files/${fileId}/view?project=681cbc230020279ce784&mode=admin`} alt={userInfo.username} className="w-10 aspect-square" />
                )}
                <div className="flex flex-col">
                    <h1 className="font-sans text-white">{userInfo.username}</h1>
                </div>
                <input type='file' onChange={handleUpload} className=''/>
                {fileId && <p>File uploaded with ID: {fileId}</p>}
            </div>
        </div>
    )
}

export default page