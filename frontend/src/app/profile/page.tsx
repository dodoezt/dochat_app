'use client'
import { useEffect, useRef, useState } from 'react'
import { account, storage, ID, Permission, Role } from '@/lib/appwrite/appwrite'

import { UseBoolean } from '@/hooks/useBoolean'
import { UserInfoType } from '@/types/user'
import ImageCropper from '@/components/functions/cropper'
import { uploadProfilePicture } from '@/components/functions/uploadToAppwrite'

import { MdAccountCircle } from 'react-icons/md'
import { FiEdit3 } from "react-icons/fi";

export const tagColors = [
  {
    tier: 'Common',
    bgColor: '#181C14',    
    borderColor: '#393E46',   
    textColor: '#393E46'      
  },
  {
    tier: 'Kinda_Cool',
    bgColor: '#A86523',       
    borderColor: '#FFD63A',   
    textColor: '#FFD63A'      
  },
  {
    tier: "Absolute_OG",
    bgColor: '#3B060A',       
    borderColor: '#8A0000',  
    textColor: '#8A0000'      
  }
];


const page = () => {
    const [userInfo, setUserInfo] = useState<UserInfoType | null>(null)
    const [croppedImage, setCroppedImage] = useState<string | null>(null)
    const [croppedBlob, setCroppedBlob] = useState<Blob | null>(null)
    const [currentImgSrc, setCurrentImgSrc] = useState<any | null>(null)
    const [fileId, setFileId] = useState<string | null>(null)
    const [tags, setTags] = useState<any[] | null>(null)
    
    const cropMode = UseBoolean(false)
    const editMode = UseBoolean(false)
    const previewMode = UseBoolean(false)
    const loading = UseBoolean(true)
    const loadingUpImg = UseBoolean(false)

    useEffect(() => {
        getUser()
        getTag()
    }, [])

    useEffect(() => {
        console.log(currentImgSrc)
    }, [currentImgSrc])

    useEffect(() => {
        if(tags && userInfo) loading.setFalse()
    }, [tags, userInfo])

    const handleFileChange = async(e: React.ChangeEvent<HTMLInputElement>) => {
        editMode.setTrue()
        const file = e.target.files?.[0]
        if(!file) return

        const reader = new FileReader();
        reader.onloadend = ()=> {
            setCroppedImage(reader.result as string)
        }

        reader.readAsDataURL(file);

        cropMode.setTrue()
    }

    const getTag = async() => {
        const response = await fetch('/api/tags', {
            method: 'GET',
            next: {revalidate : 86400}
        })

        const data = await response.json()
        setTags(data)
    }

    const getUser = async() => {
        try {
            const response = await fetch('/api/users/get-user/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'applications/json'
                },
                credentials: 'include'
            })
    
            const {user} = await response.json()
            setUserInfo(user)
            if(user) setCurrentImgSrc(`https://fra.cloud.appwrite.io/v1/storage/buckets/683bc8bf0001881c6cc5/files/${user.user_atribut.pfp_id}/view?project=681cbc230020279ce784&mode=admin`)
        } catch (error: any) {
            console.log(error.message)
        }
    }

    const getImageData = (data: any) => {
        setCroppedImage(data.croppedImg)
        setCroppedBlob(data.croppedBlob)
        setCurrentImgSrc(URL.createObjectURL(data.croppedBlob))
    }

    const handleSavePfp = async() => {
        loadingUpImg.setTrue()

        const formData = new FormData()
        formData.append('file', croppedBlob!, 'profile.jpg')
        try {
            const response = await fetch('/api/user/upload-img',{
                method: 'POST',
                body: formData
            })
        } catch (error) {
            console.log(error)
        } finally {
            loadingUpImg.setFalse()
            editMode.setFalse()
        }
    }
    
    if(loading.value) return <p className="text-white">jawa</p>

    if(cropMode.value) return (
        <div className="w-screen h-screen bg-[rgba(0, 0, 0, 0.6)] flex items-center justify-center">
            <div className="w-[90%] aspect-square">
                <ImageCropper imageUrl={croppedImage!} giveImageData={getImageData} cropMode={cropMode}/>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen p-3">
            <header className="w-full">
                <p className="font-sans text-[#e0e0e0] text-[0.9rem] font-medium">Profile</p>
            </header>
            <main className="w-full p-2">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center justify-center w-full gap-3">
                        <div className="flex flex-col items-center justify-center">
                            <div className="relative">
                                <label
                                htmlFor='file-upload' 
                                className="absolute p-1 bottom-0 right-0 bg-[rgba(0,0,0,0.6)] cursor-pointer">
                                    <FiEdit3 className='text-[#e0e0e0] text-lg'/>
                                </label>
                                <input
                                    id="file-upload"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="hidden"
                                />
                                <button 
                                onClick={()=> {
                                    previewMode.setTrue()
                                }}
                                className="flex items-center justify-center w-20 overflow-hidden rounded-full cursor-pointer aspect-square">
                                    {currentImgSrc ? (
                                        <img src={currentImgSrc} alt={userInfo?.username} className="w-full h-full" />
                                    ): (
                                         <div className="flex items-center justify-center w-full h-full">
                                            <MdAccountCircle className='text-gray-400 text-[10rem]'/>
                                        </div>
                                    )}
                                </button>
                            </div>
                            <h1 className="font-sans text-white">{userInfo!.username}</h1>
                        </div>
                        <div className="flex flex-wrap items-center justify-center w-2/3 gap-2">
                            {userInfo?.user_atribut ? (
                                userInfo?.user_atribut?.tags_used?.map((tagId) => {
                                    const tagValue = tags!.find(tag => tag.id == tagId)
                                    const tagColor = tagColors.find(tagVariable => tagVariable.tier === tagValue.tier)

                                    return (
                                        <div 
                                        key={tagId} 
                                        style={{
                                            backgroundColor: tagColor?.bgColor,
                                            borderColor: tagColor?.borderColor,
                                            color: tagColor?.textColor,
                                        }}
                                        className='px-2 text-center border rounded-full'>
                                            <p className="font-sans text-xs font-medium">{tagValue.name}</p>
                                        </div>
                                    )
                                })
                            ) : (
                                <div className=""></div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="">
                    {croppedBlob && (
                        <button
                        onClick={handleSavePfp}
                        className="font-sans text-lg text-white">save</button>
                    )}
                </div>
            </main>
            <button
            onClick={() => {
                previewMode.setFalse()
            }}
            className={`${previewMode.value ? 'flex' : 'hidden'} w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[rgba(0,0,0,0.6)]`}>
                <div className="w-2/3 aspect-square">
                    <img src={currentImgSrc} alt={userInfo?.username} className="h-full w-fulll" />
                </div>
            </button>
        </div>
    )
}

export default page