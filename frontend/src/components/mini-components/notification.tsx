import React, { useEffect, useRef } from 'react'
import GeneratePfp from '@/functions/generatePfp';
import { useRouter } from 'next/navigation';
import { useAuthContext } from '../contexts/children/authContext';

import { IoMdClose } from "react-icons/io";

type NotificationProps = {
    queues: Queue[];
    setNotifications: any;
}

type Queue = {
    title?: string,
    type: 'friend-request' | 'message',
    friendshipId?: number, 
    from: {
        userId: number,
        username: string,
        pfp_id: string,
    },
    conversationId?: string,
    content?: string,
    msgId?: string,
}

const Notification: React.FC<NotificationProps> = ({queues, setNotifications}) => {
    if(!queues || queues.length === 0) return null;
    const router = useRouter()

    console.log('queues', queues)
    // const { audio } = useAuthContext()

    const containerRef = useRef<HTMLDivElement | null>(null)
    const timerLineRef = useRef<HTMLDivElement | null>(null)

    function handleClose() {
        containerRef.current?.classList.replace('opacity-100', 'opacity-0')
        containerRef.current?.classList.replace('-translate-y-0', '-translate-y-full')
        setTimeout(() => setNotifications((prev: any[]) => prev.slice(1)), 200)
    }
        
    useEffect(() => {
        // if(audio) audio.play()
        // timerLineRef.current?.classList.replace('-translate-x-0', '-translate-x-full')

        const animationDelay = setTimeout(() => {
            containerRef.current?.classList.replace('-translate-y-full', '-translate-y-0')
            containerRef.current?.classList.replace('opacity-0', 'opacity-100')
        }, 100)

        const timer = setTimeout(() => {
            handleClose();
        }, 5200)

        return () => {
            clearTimeout(timer)
            clearTimeout(animationDelay)  
        }
    }, [queues[0], queues[0].friendshipId, queues[0].msgId])

    return (
        <div 
        ref={containerRef}
        className={`w-[80%] fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-xl bg-[#121212] border border-[#2c2c2c] px-3 py-3 opacity-0 -translate-y-full transition-all ease-in-out duration-200 overflow-hidden`}>
            <div className="relative flex flex-col w-full">
                {queues[0].type === 'friend-request' ? (
                    <div className="flex flex-col w-full space-y-2">
                        <header className="flex items-center w-full">
                            <h1 className="font-sans text-base font-medium text-white">{queues[0].title}</h1>
                        </header>
                        <main className="flex items-center justify-between w-full">
                            <div className="flex items-center gap-3">
                                <div className="w-8 overflow-hidden rounded-full aspect-square">
                                    <GeneratePfp pfp_id={queues[0].from.pfp_id} username={queues[0].from.username}/>
                                </div>
                                <h1 className="font-sans font-medium text-white font-white">{queues[0].from.username}</h1>
                            </div>
                            <div className="flex items-center gap-5">
                                <button className="w-8 p-1 rounded-full aspect-square">

                                </button>
                            </div>
                        </main>
                    </div>
                ) : (
                    <div className="flex flex-col w-full space-y-2">
                        <header className="flex items-center w-full gap-3">
                            <div className="overflow-hidden rounded-full w-7 aspect-square">
                                <GeneratePfp pfp_id={queues[0].from.pfp_id} username={queues[0].from.username}/>
                            </div>
                            <h1 className="font-sans font-medium text-white font-white">{queues[0].from.username}</h1>
                        </header>
                        <button 
                        onClick={() => router.push(`/chat/c/${queues[0].conversationId}`)}
                        className="flex items-center w-full gap-1 cursor-pointer">
                            <h1 className="font-sans text-sm font-medium text-white font-white">{queues[0].from.username}: </h1>
                            <p className="font-sans text-sm font-normal text-white font-white">{queues[0].content}</p>
                        </button>
                    </div>
                )}
                <span className="fixed top-0 right-0">
                    <button
                    onClick={handleClose}
                    className="aspect-video p-2 bg-[#2c2c2c] cursor-pointer rounded-tr-xl rounded-bl-xl">
                        <IoMdClose className='text-sm text-white'/>
                    </button>
                </span>
            </div>
        </div>
    )
}

export default Notification