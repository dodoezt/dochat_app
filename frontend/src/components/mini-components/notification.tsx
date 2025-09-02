import React, { useEffect, useRef } from 'react'
import GeneratePfp from '@/functions/generatePfp';

import { IoMdClose } from "react-icons/io";
import { useAuthContext } from '../contexts/children/authContext';

type NotificationProps = {
    queues: Queue[];
    setNotifications: any;
}

type Queue = {
    type: 'friend-request',
    friendshipId?: number, 
    from: {
        userId: number,
        username: string,
        pfp_id: string,
    },
    title: string
}

const Notification: React.FC<NotificationProps> = ({queues, setNotifications}) => {
    if(!queues || queues.length === 0) return null;

    console.log('queues', queues)
    const { audio } = useAuthContext()

    const containerRef = useRef<HTMLDivElement | null>(null)
    const timerLineRef = useRef<HTMLDivElement | null>(null)

    function handleClose() {
            containerRef.current?.classList.replace('opacity-100', 'opacity-0')
            containerRef.current?.classList.replace('-translate-y-0', '-translate-y-full')
            setTimeout(() => setNotifications((prev: any[]) => prev.slice(1)), 200)
        }
        
    useEffect(() => {
        if(audio) audio.play()
            
            containerRef.current?.classList.replace('-translate-y-full', '-translate-y-0')
            containerRef.current?.classList.replace('opacity-0', 'opacity-100')
            // timerLineRef.current?.classList.replace('-translate-x-0', '-translate-x-full')

        const timer = setTimeout(() => {
            handleClose();
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <div 
        ref={containerRef}
        className={`w-[80%] fixed top-2 left-1/2 transform -translate-x-1/2 z-50 rounded-xl bg-[#121212] border border-[#2c2c2c] px-3 py-3 opacity-0 -translate-y-full transition-all ease-in-out duration-200 overflow-hidden`}>
            <div className="relative flex flex-col w-full space-y-2">
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
                <span className="fixed top-0 right-0">
                    <button
                    onClick={handleClose}
                    className="aspect-video p-2 bg-[#2c2c2c] cursor-pointer rounded-tr-xl rounded-bl-xl">
                        <IoMdClose className='text-sm text-white'/>
                    </button>
                </span>
                <span 
                ref={timerLineRef}
                className={`w-full bg-white h-1 fixed bottom-0 left-0 transition-all ease-linear duration-[5000] -translate-x-0`}></span>
            </div>
        </div>
    )
}

export default Notification