'use client'
import { useEffect, useRef, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { produce } from 'immer'
import { useAuthContext } from '@/components/contexts/children/authContext'
import { useSearchParams } from 'next/navigation'

import { UseBoolean } from '@/hooks/useBoolean'
import { UserInfoType } from '@/types/user'
import ImageCropper from '@/functions/cropper'
import GeneratePfp from '@/functions/generatePfp'
import TagsList from '@/components/seperated-component/profile/TagsList'

import ShinyText from '@/components/reactBits/shinyText'
import { RoundSpinner } from '@/components/ui/spinner'

import { MdAccountCircle, MdPersonRemove } from 'react-icons/md'
import { FiEdit3 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import { IoMdClose, IoMdArrowBack } from "react-icons/io";
import { IoChatboxEllipses } from "react-icons/io5";
import { FaSquareCheck } from "react-icons/fa6";

export type tagColorsType = {
    tier : "Common" | "Kinda_Cool" | "Absolute_OG",
    bgColor: string,
    borderColor: string,
    textColor: string,
}

export const tagColors: tagColorsType[] = [
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
    const { userInfo, setUserInfo, friendships, setFriendships, friendConnections, requesterConnections, newFriendRequests } = useAuthContext()
    const [croppedImage, setCroppedImage] = useState<string | null>(null)
    const [croppedBlob, setCroppedBlob] = useState<Blob | null>(null)
    const [currentImgSrc, setCurrentImgSrc] = useState<any | null>(null)
    const [tags, setTags] = useState<any[] | null>(null)
    const [socialFilter, setSocialFilter] = useState<'friends' | 'requests'>('friends')
    const [originalUserInfo, setOriginalUserInfo] = useState<UserInfoType | null>(null)

    const router = useRouter()
    const searchParams = useSearchParams()
    const initialEditMode = searchParams.get('editMode') === "1" ? true : false

    const isChanged = UseBoolean(false)

    const loadings = {
        user: UseBoolean(true),
        tags: UseBoolean(true),
        friendships: UseBoolean(true),
    }

    const editModes = {
        bio: UseBoolean(true),
    }
    
    const cropMode = UseBoolean(false)
    const editMode = UseBoolean(initialEditMode)
    const previewMode = UseBoolean(false)
    const loading = UseBoolean(true)
    const loadingUpImg = UseBoolean(false)

    const bioInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        // getUser()
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

    useEffect(() => {
        if(userInfo && !originalUserInfo) setOriginalUserInfo(userInfo)
    }, [userInfo, originalUserInfo])

    useEffect(() => {
        if(!userInfo || !originalUserInfo) return;

        const changed = JSON.stringify(userInfo) !== JSON.stringify(originalUserInfo);

        if(changed) isChanged.setTrue()
        else isChanged.setFalse()
    }, [userInfo, originalUserInfo])

    useEffect(() => {   
        if(!userInfo?.user_atribut.pronounces) return;
        const pronounces = userInfo.user_atribut.pronounces
        let valueFound = false
        for(let i = 0; i < pronounces.length; i++){
            if(pronounces[i] && pronounces[i] !== ""){
                valueFound = true
            }
        }

        if(!valueFound) {
            setUserInfo(prev => 
                produce(prev, draft => {
                    if(!draft) return
                    draft!.user_atribut.pronounces = null
                    return draft
                })
            )
        }
    }, [userInfo?.user_atribut.pronounces])

    useEffect(() => {console.log(isChanged)}, [isChanged])

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

    // const getUser = async() => {
    //     loadings.user.setTrue()
    //     try {
    //         const response = await fetch('/api/v1/users/me', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'applications/json'
    //             },
    //             credentials: 'include'
    //         })
    
    //         const {user} = await response.json()
    //         setUserInfo(user)
    //         if(user) setCurrentImgSrc(`https://fra.cloud.appwrite.io/v1/storage/buckets/683bc8bf0001881c6cc5/files/${user.user_atribut.pfp_id}/view?project=681cbc230020279ce784&mode=admin`)
    //     } catch (error: any) {
    //         console.log(error.message)
    //         setUserInfo(null)
    //     } finally {
    //         loadings.user.setFalse()
    //     }
    // }

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
                    <button
                    onClick={() => {
                        if(editMode.value) {
                            router.replace('/profile')
                            editMode.setFalse()
                        } else {
                            router.push('/chat')
                        }
                    } }
                    className="flex items-center justify-center p-1 cursor-pointer aspect-square">
                        <IoMdArrowBack className='text-white text-md'/>
                    </button>
                    <p className="font-sans text-[#e0e0e0] text-[0.9rem] font-medium">
                        {editMode.value ? 'Edit Profile' : 'Profile'}
                    </p>
                </div>
                <div className="flex items-center justify-end flex-1">
                    {editMode.value && (
                        <button 
                        className={`px-2 py-1 font-sans text-sm font-medium bg-white border border-white text-[#121212] rounded-lg ${isChanged.value ? "cursor-pointer brightness-100" : "cursor-default brightness-50"} transition-all ease-in-out duration-200`}>
                            Save Update
                        </button>
                    )}
                </div>
            </header>
            {editMode.value ? (
                <main className="w-full p-2">
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col w-full">
                            <div id="header" className="flex flex-col items-center space-y-1">
                                <div className="w-12 overflow-hidden rounded-full aspect-square">
                                    <GeneratePfp pfp_id={userInfo?.user_atribut.pfp_id!} username={userInfo?.username!}/>
                                </div>
                                <p className="font-sans text-xs text-blue-500">change your profile picture</p>
                            </div>
                            <div id="main" className="flex flex-col w-full space-y-2">                
                                <div className="flex flex-col items-start justify-center w-full px-5 space-y-1">
                                    <span className="font-sans text-sm text-white">Username</span>
                                    <input 
                                    value={userInfo?.username}
                                    onChange={(e) => {
                                        setUserInfo((prev) => ({
                                            ...prev!,
                                            username: e.target.value
                                        }))
                                    }}
                                    type="text" 
                                    className="w-full px-3 py-2 text-sm text-white border-[#2c2c2c] outline-none appearance-none border-1 focus:border-white transition-all ease-in-out duration-150 rounded-lg" />
                                </div>
                                <div className="flex flex-col items-start justify-center w-full px-5 space-y-1">
                                    <span className="font-sans text-sm text-white">Pronounces</span>
                                    <div className="flex items-center w-full space-x-2">    
                                        <input 
                                            placeholder='Pronounce 1'
                                            value={userInfo?.user_atribut.pronounces?.[0] || ''}
                                            onBlur={() => {
                                                if(!userInfo?.user_atribut.pronounces?.[0] || userInfo.user_atribut.pronounces[0] === ""){
                                                    setUserInfo((prev) =>
                                                        produce(prev!, draft => {
                                                            if(!draft.user_atribut.pronounces) draft.user_atribut.pronounces = []
                                                            draft.user_atribut.pronounces.shift()
                                                            return draft
                                                        })
                                                    )
                                                }
                                            }}
                                            onChange={(e) => {
                                                setUserInfo((prev) => 
                                                    produce(prev!, draft => {
                                                        if(!draft.user_atribut.pronounces) draft.user_atribut.pronounces = []
                                                        draft.user_atribut.pronounces[0] = e.target.value
                                                        return draft
                                                    })
                                                )
                                            }}
                                            type="text" 
                                            className="w-full px-3 py-2 text-sm text-white border-[#2c2c2c] outline-none appearance-none border-1 focus:border-white transition-all ease-in-out duration-150 rounded-lg" 
                                        />
                                        <input 
                                            placeholder='Pronounce 2'
                                            value={userInfo?.user_atribut.pronounces?.[1] || ''}
                                            onBlur={() => {
                                                if(!userInfo?.user_atribut.pronounces?.[0] || userInfo.user_atribut.pronounces[0] === ""){
                                                    setUserInfo((prev) =>
                                                        produce(prev!, draft => {
                                                            if(!draft.user_atribut.pronounces) draft.user_atribut.pronounces = []
                                                            draft.user_atribut.pronounces.shift()
                                                            return draft
                                                        })
                                                    )
                                                }
                                            }}
                                            onChange={(e) => {
                                                setUserInfo((prev) => 
                                                    produce(prev!, draft => {
                                                        if(!draft.user_atribut.pronounces) draft.user_atribut.pronounces = []
                                                        draft.user_atribut.pronounces[1] = e.target.value
                                                        return draft
                                                    }
                                                ))
                                            }}
                                            type="text" 
                                            className="w-full px-3 py-2 text-sm text-white border-[#2c2c2c] outline-none appearance-none border-1 focus:border-white transition-all ease-in-out duration-150 rounded-lg" 
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col items-start justify-center w-full px-5 space-y-1">
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-sans text-sm text-white">Tags</h1>
                                        <span className="font-sans text-sm text-white">({userInfo?.user_atribut.tags_used?.length ?? 0}/6)</span>
                                    </div>
                                    <div className="flex flex-wrap items-center gap-1">
                                        {userInfo?.user_atribut && (
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
                                        )}
                                    </div>
                                    <TagsList tags={tags!} userInfo={userInfo!} setUserInfo={setUserInfo}/>
                                </div>
                                <div className="flex flex-col items-start justify-center w-full px-5 space-y-1">
                                    <div className="flex items-center space-x-1">
                                        <h1 className="font-sans text-sm text-white">Bio</h1>
                                        <span className="font-sans text-sm text-white">({userInfo?.user_atribut.bio?.length ?? 0}/255)</span>
                                    </div>
                                    <textarea
                                        value={userInfo?.user_atribut.bio ?? ""}
                                        onChange={(e) => {
                                            if(e.target.value.length > 255) return;
                                            setUserInfo((prev) => {
                                                const value = e.target.value !== "" ? e.target.value : null
                                                return ({
                                                    ...prev!,
                                                    user_atribut: {
                                                        ...prev!.user_atribut,
                                                        bio: value,
                                                    },
                                                })
                                            });
                                        }}
                                        className="w-full min-h-20 max-h-36 px-3 py-2 text-xs text-white border border-[#2c2c2c] outline-none rounded-lg  focus:border-white transition-all ease-in-out duration-150 overflow-y-auto resize-none text-left align-top"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            ) : (
                <main className="w-full p-2">
                    <div className="flex flex-col items-center w-full">
                        <div className="flex flex-col items-center justify-center w-full">
                            <div className="flex flex-col items-center justify-center w-full space-y-2">
                                <div className="relative">
                                    <label
                                    htmlFor='file-upload' 
                                    className="absolute p-1 bottom-0 right-0 bg-[rgba(0,0,0,1)] cursor-pointer">
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
                                        {userInfo?.user_atribut.pfp_id ? (
                                            <GeneratePfp pfp_id={userInfo.user_atribut.pfp_id} username={userInfo.user_atribut.pfp_id}/>
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
                                <div className="flex items-center space-x-2">
                                    <div className="flex items-center justify-end space-x-1">
                                        <button 
                                        onClick={() => {
                                            router.replace('/profile?editMode=1')
                                            editMode.setTrue()
                                        }}
                                        className="flex items-center px-3 py-1 font-sans text-white cursor-pointer border-b-1 border-x border-[#2c2c2c] text-sm bg-transparent hover:bg-[rgba(0,0,0,1)] transition-all duration-150 ease-in-out rounded-lg">
                                            Edit Profile
                                        </button>
                                    </div>
                                    <div className="flex items-center justify-end space-x-1">
                                        <button className="flex items-center px-3 py-1 font-sans text-white cursor-pointer border-b-1 border-x border-[#2c2c2c] text-sm bg-transparent hover:bg-[rgba(0,0,0,1)] transition-all duration-150 ease-in-out rounded-lg">
                                            Share Profile
                                        </button>
                                    </div>
                                </div>
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
                                            id="friends"
                                            className={`flex items-center px-3 py-1 font-sans font-medium text-white cursor-pointer border-x border-b border-[#2c2c2c] text-xs hover:bg-[rgba(0,0,0,1)] transition-all duration-150 ease-in-out rounded-lg 
                                                ${socialFilter === 'friends' ? 'bg-[rgba(0,0,0,1)]' : 'bg-transparent'}`}
                                            >
                                            friends
                                        </button>

                                        <button
                                            onClick={() => setSocialFilter('requests')}
                                            id='requests'
                                            className={`flex items-center px-3 py-1 font-sans font-medium text-white cursor-pointer border-x border-b border-[#2c2c2c] text-xs hover:bg-[rgba(0,0,0,1)] transition-all duration-150 ease-in-out rounded-lg 
                                                ${socialFilter === 'requests' ? 'bg-[rgba(0,0,0,1)]' : 'bg-transparent'}`}>
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
            )}
            <button
            onClick={() => {
                previewMode.setFalse()
            }}
            className={`${previewMode.value ? 'flex' : 'hidden'} w-screen h-screen fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-[rgba(0,0,0,1)]`}>
                <div className="w-2/3 aspect-square">
                    <img src={currentImgSrc} alt={userInfo?.username} className="h-full w-fudll" />
                </div>
            </button>
        </div>
    )
}

export default page