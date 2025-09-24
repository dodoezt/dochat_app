'use client'
import { useEffect, useRef, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { produce } from 'immer'
import { useAuthContext } from '@/components/contexts/children/authContext'

import { UseBoolean } from '@/hooks/useBoolean'
import { UserInfoType } from '@/types/user'
import ImageCropper from '@/functions/cropper'

import ShinyText from '@/components/reactBits/shinyText'
import { RoundSpinner } from '@/components/ui/spinner'

import { MdAccountCircle, MdPersonRemove } from 'react-icons/md'
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { IoMdClose, IoMdArrowBack } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";

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
    const [tags, setTags] = useState<any[] | null>(null)
    const [socialFilter, setSocialFilter] = useState<'friends' | 'requests'>('friends')
    const router = useRouter()

    const { friendships, setFriendships, friendConnections, requesterConnections, newFriendRequests } = useAuthContext()

    const loadings = {
        user: UseBoolean(true),
        tags: UseBoolean(true),
        friendships: UseBoolean(true),
    }

    const editModes = {
        bio: UseBoolean(true),
    }
    
    const cropMode = UseBoolean(false)
    const editMode = UseBoolean(false)
    const previewMode = UseBoolean(false)
    const loading = UseBoolean(true)
    const loadingUpImg = UseBoolean(false)

    const bioInputRef = useRef<HTMLInputElement>(null)

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

    useEffect(() => {
        if(friendships) loadings.friendships.setFalse()
    }, [friendships])

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
        loadings.tags.setTrue()
        
        try {
            const response = await fetch('/api/v1/tags', {
                method: 'GET',
                next: {
                    revalidate : 86400
                }
            })
    
            const data = await response.json()
            setTags(data)
        } catch (error) {
            console.log(error)
            setTags(null)
        } finally {
            loadings.tags.setFalse()
        }
    }

    const getUser = async() => {
        loadings.user.setTrue()
        try {
            const response = await fetch('/api/v1/users/me', {
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
            setUserInfo(null)
        } finally {
            loadings.user.setFalse()
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
            const response = await fetch('/api/v1/users/me/avatar',{
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

    async function handleOnAccept(friendshipId: number) {
        try {
            const response = await fetch(`/api/v1/users/me/friendships/${friendshipId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            const data = await response.json()

            if(response.ok){
                setFriendships(prev => 
                    produce(prev, draft => {
                        const index = draft!.findIndex(friendship => friendship.id === friendshipId)
                        if(index !== -1) draft![index] = {...draft![index], status: 'accepted'}
                        return draft
                    })
                )
            }
        } catch (error) {
            console.log(error)
        }
    }

    async function handleOnDecline(friendshipId: number) {
        try {
            const response = await fetch(`/api/v1/users/me/friendships/${friendshipId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })

            setFriendships(prev => 
                produce(prev, draft => {
                    const index = draft!.findIndex(friendship => friendship.id === friendshipId)
                    if(index !== -1) draft!.splice(index, 1)
                    return draft
                })
            )

            if(response.ok){
                setFriendships?.(prev => prev!.filter(friendship => friendship.id !== friendshipId))
            }
        } catch (error) {
            console.error(error)            
        }
    }

    async function handleOnRemoveFriend(friendshipId: number) {
        try {
            const response = await fetch(`/api/v1/users/me/friendships/${friendshipId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })

            if(response.ok){
                setFriendships(prev => 
                    produce(prev, draft => {
                        const index = draft!.findIndex(friendship => friendship.id === friendshipId)
                        if(index !== -1) draft!.splice(index, 1)
                        return draft
                    })
                )
            }
        } catch (error) {
            console.error(error)            
        }
    }

    async function handleStartConversation (toUserId: number) {
        try {
        const response = await fetch('/api/v1/conversations', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(toUserId),
            credentials: 'include',
        })

        if(response.ok){
            const data = await response.json();
            console.log('conversation created:', data)
            router.push(`/chat/c/${data.conversationId}`);
        }
        } catch (error) {
            console.error('Error starting conversation:', error); 
        }
    }

    const fullRequesterConnections = useMemo(() => {
        if (!requesterConnections) return;

        return [...newFriendRequests, ...requesterConnections]
    }, [requesterConnections, newFriendRequests])

    useEffect(() => {
        console.log('fullRequesterConnections', fullRequesterConnections)
    }, [fullRequesterConnections])

    useEffect(() => {
        console.table(friendships)
        console.log('friendConnections', friendConnections)
        console.log('requesterConnections', requesterConnections)
    }, [friendships])
    
    if(loading.value) {
        return (
            <div className="flex flex-col items-center justify-center w-screen h-screen space-y-1">
                <RoundSpinner color="white" size="lg"/>
                <p className="font-sans text-xs text-white">gathering your data...</p>
            </div>
        )
    }

    if(cropMode.value) return (
        <div className="w-screen h-screen bg-[rgba(0, 0, 0, 0.6)] flex items-center justify-center">
            <div className="w-[90%] aspect-square">
                <ImageCropper imageUrl={croppedImage!} giveImageData={getImageData} cropMode={cropMode}/>
            </div>
        </div>
    )

    return (
        <div className="flex flex-col items-center justify-start w-screen h-screen p-3">
            <header className="flex items-center justify-between w-full">
                <div className="flex items-center justify-start flex-1 space-x-1">
                    <button className="flex items-center justify-center p-1 aspect-square">
                        <IoMdArrowBack className='text-white text-md'/>
                    </button>
                    <p className="font-sans text-[#e0e0e0] text-[0.9rem] font-medium">Profile</p>
                </div>
                <div className="flex items-center justify-end flex-1 space-x-1">
                    <button className="flex items-center px-2 py-1 font-sans font-medium text-white cursor-pointer border-b border-[#2c2c2c] text-xs">
                        Edit Profile
                    </button>
                </div>
            </header>
            <main className="w-full p-2">
                <div className="flex flex-col items-center w-full">
                    <div className="flex flex-col items-center justify-center w-full">
                        <div className="flex flex-col items-center justify-center w-full space-y-2">
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
                            <div className="flex items-center gap-2">
                                <h1 className="font-sans text-white">{userInfo!.username}</h1>
                                {userInfo?.user_atribut.pronounces && (
                                    <p className="font-sans text-sm text-gray-500">
                                        {userInfo.user_atribut.pronounces.join('/')}
                                    </p>
                                )}
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
                                            draggable={false}
                                            className='px-2 text-center border rounded-full cursor-default'>
                                                {tagValue.tier === 'Absolute_OG' ? (
                                                    <ShinyText text={tagValue.name} className='text-xs text-[#8A0000] font-sans'/>
                                                ): (
                                                    <p className="font-sans text-xs font-medium">{tagValue.name}</p>
                                                )}
                                            </div>
                                        )
                                    })
                                ) : (
                                    <div className=""></div>
                                )}
                            </div>
                            {editModes.bio.value ? (
                                <div className="w-2/3 font-sans text-sm text-center text-white">
                                    <input
                                    onBlur={(() => {
                                        editModes.bio.setFalse()
                                        if(bioInputRef.current) {
                                            bioInputRef.current.blur()
                                            bioInputRef.current.select()
                                        }
                                        if(userInfo?.user_atribut.bio && userInfo.user_atribut.bio.trim() === ''){
                                            setUserInfo((prev) => ({
                                                ...prev!,
                                                user_atribut: {
                                                    ...prev!.user_atribut,
                                                    bio: 'no bio yet.'
                                                }
                                            }))
                                        }
                                    })} 
                                    ref={bioInputRef}
                                    type="text" 
                                    value={userInfo?.user_atribut.bio ?? 'no bio yet.'}
                                    onChange={((e) => {
                                        setUserInfo((prev) => ({
                                            ...prev!,
                                            user_atribut: {
                                                ...prev!.user_atribut,
                                                bio: e.target.value
                                            }
                                        }))
                                    })}
                                    className="w-auto h-auto text-center outline-none appearance-none text-wrap" />
                                </div>
                            ): (
                                <div
                                className="w-2/3 font-sans text-sm text-center text-white">
                                    <button 
                                        onClick={() => {
                                            editModes.bio.setTrue()
                                            if(bioInputRef.current) {
                                                bioInputRef.current.focus()
                                            }
                                        }}
                                        className="w-auto h-auto cursor-text">
                                        {userInfo?.user_atribut.bio ? (
                                            <p className="">{userInfo.user_atribut.bio}</p>
                                        ): (
                                            <p className="">no bio yet.</p>
                                        )}
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="flex w-full">
                            <div className="flex flex-col w-full">
                                <div className="flex items-center w-full">
                                    <h1 className="font-sans text-lg font-medium text-white">Friend List</h1>
                                </div>
                                <div className="flex items-center w-full gap-2">
                                    <button 
                                    onClick={() => setSocialFilter('friends')}
                                    id='friends'
                                    className={`text-xs text-white font-sans px-2 py-1 rounded-lg bg-[#2c2c2c] hover:bg-[#393939] cursor-pointer ${socialFilter === 'friends' ? 'border border-white' : ''}`}>
                                        friends
                                    </button>
                                    <button
                                    onClick={() => setSocialFilter('requests')}
                                    id='requests'
                                    className={`text-xs text-white font-sans px-2 py-1 rounded-lg bg-[#2c2c2c] hover:bg-[#393939] cursor-pointer ${socialFilter === 'requests' ? 'border border-white' : ''}`}>
                                        requests
                                    </button>
                                </div>
                                {friendships ? (
                                    friendships.filter(friendship => friendship.status === (socialFilter === 'friends' ? 'accepted' : 'pending')).length > 0 ? (
                                        <div className="flex flex-col w-full mt-2">
                                            {socialFilter === 'friends' ? (
                                                friendConnections && friendConnections.map((friendConnection, idx) => {
                                                    const friend = friendConnection?.friend
                                                    if(!friend) return;
                                                    return (
                                                        <div key={idx} className="flex items-center justify-between w-full px-2 py-2 h-14 ">
                                                            <div className="flex items-center h-full gap-2">
                                                                <div className="h-full overflow-hidden rounded-full aspect-square">
                                                                    <img src={`${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL}${friend?.user_atribut.pfp_id}${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL_END}`} alt={`${friend?.username} pfp`} className="object-cover w-full h-full" />
                                                                </div>
                                                                <h1 className="text-base font-medium text-white font-roboto">{friend?.username}</h1>
                                                            </div>
                                                            <div className="flex items-center h-full gap-3">
                                                                <button 
                                                                onClick={() => handleStartConversation(friend?.userId)}
                                                                className="flex items-center justify-center h-full p-1 cursor-pointer">
                                                                    <IoChatboxEllipses className='text-xl text-white'/>
                                                                </button>
                                                                <button 
                                                                onClick={() => handleOnRemoveFriend(friendConnection.friendshipId)}
                                                                className="flex items-center justify-center h-full p-1 cursor-pointer">
                                                                    <MdPersonRemove className='text-xl text-red-500'/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            ) : (
                                                requesterConnections && requesterConnections.length > 0 ? [...newFriendRequests, ...requesterConnections].map((requesterConnection, idx) => {
                                                    const requester = requesterConnection?.requester
                                                    if(!requester) return;
                                                    return (
                                                        <div key={idx} className="flex items-center justify-between w-full h-12 px-2 py-2">
                                                            <div className="flex items-center h-full gap-2">
                                                                <div className="h-full overflow-hidden rounded-full aspect-square">
                                                                    <img src={`${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL}${requester?.user_atribut.pfp_id}${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL_END}`} alt={`${requester?.username} pfp`} className="w-full h-full" />
                                                                </div>
                                                                <h1 className="text-base font-medium text-white font-roboto">{requester?.username}</h1>
                                                            </div>
                                                            <div className="flex items-center gap-2">
                                                                <button 
                                                                onClick={() => handleOnAccept(requesterConnection!.friendshipId)}
                                                                className="flex items-center justify-center p-2 bg-green-600 rounded-full cursor-pointer">
                                                                    <FaCheck className='text-[#121212] text-base'/>
                                                                </button>
                                                                <button
                                                                onClick={() => handleOnDecline(requesterConnection!.friendshipId)}
                                                                className="flex items-center justify-center p-2 bg-gray-500 rounded-full cursor-pointer">
                                                                    <IoMdClose className='text-[#121212] text-lg'/>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    )
                                                }) : (
                                                    <p className="text-sm text-white">You dont have any request yet.</p>
                                                )
                                            )}
                                        </div>
                                    ) : (
                                        <p className="text-sm text-white">You dont have any {socialFilter} yet.</p>
                                    )
                                ) : (
                                    <h1 className="text-sm font-medium text-white">loading...</h1>
                                )}
                            </div>
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
                    <img src={currentImgSrc} alt={userInfo?.username} className="h-full w-fudll" />
                </div>
            </button>
        </div>
    )
}

export default page