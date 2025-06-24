'use client'
import { useEffect, useState } from 'react'
import { account, storage, ID, Permission, Role } from '@/lib/appwrite/appwrite'

import { UserInfoType } from '@/types/user'
import { MdAccountCircle } from 'react-icons/md'
import ImageCropper from '@/components/functions/cropper'
import { uploadProfilePicture } from '@/components/functions/uploadToAppwrite'

import { UseBoolean } from '@/hooks/useBoolean'

const page = () => {
    const [fileId, setFileId] = useState<string | null>(null)
    const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)
    const [imgPreviewUrl, setImgPreviewUrl] = useState<string | null>(null)
    const [blobImage, setBlobImage] = useState<Blob | null>(null)
    const cropMode = UseBoolean(false)
    const loading = UseBoolean(true)

    useEffect(() => {
        getUser()
    }, [])

    const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(!file) return

        const reader = new FileReader();
        reader.onloadend = ()=> {
            setImgPreviewUrl(reader.result as string)
        }

        reader.readAsDataURL(file);

        cropMode.setTrue()
    }

    const getUser = async() => {
        loading.setTrue()
        try {
            const response = await fetch('/api/users/get-user/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json'
                },
                credentials: 'include'
            })
    
            const data = await response.json()
            setUserInfo(data.user)
        } catch (error: any) {
            console.log(error.message)
        } finally {
            loading.setFalse()
        }
    }

    const getImageData = (data: any) => {
        console.log(data)
        setImgPreviewUrl(data.croppedImg)
        setBlobImage(data.croppedBlob)
    }
    
    if(loading.value) return <p className="text-white">jawa</p>

    if(cropMode.value) return (
        <div className="w-screen h-screen bg-[rgba(0, 0, 0, 0.6)] flex items-center justify-center">
            <div className="w-[90%] aspect-square">
                <ImageCropper imageUrl={imgPreviewUrl!} giveImageData={getImageData} cropMode={cropMode}/>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <div className="flex items-center justify-center w-20 overflow-hidden rounded-full aspect-square">
                {userInfo!.user_atribut.pfp_id ? (
                    <img src={userInfo!.user_atribut.pfp_id} alt={`${userInfo!.username} pfp`} className="w-full h-full" />
                ): (
                    imgPreviewUrl ? (
                        <img src={imgPreviewUrl} alt='pfp preview' className="w-full h-full" />
                    ): (
                        <div className="flex items-center justify-center w-full h-full">
                            <MdAccountCircle className='text-gray-400 text-[10rem]'/>
                        </div>
                    )
                )}
            </div>
            <div className="flex flex-col">
                <h1 className="font-sans text-white">{userInfo!.username}</h1>
            </div>
            <div className="flex items-center justify-center">
                <label
                    htmlFor="file-upload"
                    className="px-4 py-2 text-sm font-medium text-white transition bg-blue-600 rounded-md shadow cursor-pointer hover:bg-blue-700"
                >
                    {!imgPreviewUrl ? 'Upload File' : 'Change File'}
                </label>
                <input
                    id="file-upload"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </div>
            <div className="">
                {blobImage && (
                    <button
                    onClick={() => {
                        uploadProfilePicture(blobImage!, userInfo!.username)
                    }}
                    className="font-sans text-lg text-white">save</button>
                )}
            </div>
        </div>
    )
}

export default page