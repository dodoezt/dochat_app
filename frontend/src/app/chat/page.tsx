'use client'
import socket from '@/lib/socket'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo } from 'react';
import { useDebounce } from 'use-debounce'

import ExpandableText from '@/components/functions/expandableText';

import { IoMdSend } from "react-icons/io";
import { BsCheckAll } from "react-icons/bs";


interface Props {}

const page: React.FC<Props> = ({}) => {
    const searchParams = useSearchParams()
    const convId = searchParams.get('convId')
    const userId = searchParams.get('id')

    const [messages, setMessages] = useState<any[]>([])
    const [textInput, setTextInput] = useState<string>('')
    const [isTyping, setIsTyping] = useState(false);
    const [hasEmittedTyping, setHasEmittedTyping] = useState<boolean>(false)
    
    const [debounceInput] = useDebounce(textInput, 500)

    useEffect(() => {
        if(!convId) return

        if(!socket.connected) socket.connect()
            
        socket.emit('join-room', convId)
        socket.on('receive-message', (msg: any) => {
            setMessages((prev) => [...prev, msg]);
        })

        return () => {
            socket.off("receive-message");
            socket.disconnect();
        };
    }, [convId])

    useEffect(() => {
        if (textInput.length > 0 && !hasEmittedTyping) {
            setHasEmittedTyping(true)
            socket.emit('status-typing', { 
                conversationId: convId, 
                userId, 
                typing: true 
            });
        }
    }, [textInput]);

    useEffect(() => {
        if (debounceInput.length === 0) return;
            setHasEmittedTyping(false)
            socket.emit('status-typing', { 
                conversationId: convId,
                userId, 
                typing: false 
            });
    }, [debounceInput]);


    useEffect(() => {
        socket.on("show-typing-status", ({ senderId, typing }) => {
            if (senderId !== userId) {
                setIsTyping(typing);
            }
        });

        return () => {
            socket.off("show-typing-status");
        };
    }, [userId]);


    const sendMessage = () => {
        if (!textInput.trim()) return;

        const newMsg = {
            id: crypto.randomUUID(),
            conversationId: convId,
            senderId: userId,
            text: textInput,
            createdAt: new Date().toISOString(),
            seen: false,
        }

        socket.emit("send-message", newMsg);

        setTextInput("");
        setMessages((prev) => [...prev, newMsg])
    };

    const getTime = (date: string) => {
        const d = new Date(date); // konversi ISO string ke Date object
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    };

    return (
        <div className="relative w-screen h-screen">
            <header className="fixed top-0 flex items-center justify-between w-full p-3 h-[60px] border-b border-b-[#2c2c2c] bg-[#121212] z-10">
                <div className="flex items-center flex-1 h-full space-x-2">
                    <div className="aspect-square w-9 rounded-full border-[1px] border-[#e0e0e0]"></div>
                    <div className="flex flex-col h-full">
                        <div className="flex items-start h-1/2">
                            <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">si Ganteng | <span className="text-[#888888] font-normal text-xs">@dodoezt</span></h1>
                        </div>
                        <div className="flex items-end h-1/2">
                            <p className="font-sans text-[#888888] text-xs">{isTyping ? 'typing...' : 'online'}</p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </header>
            <main className="w-full h-full pt-[72px] pb-12 overflow-y-scroll flex flex-col">
                {messages.map((msg) => (
                    <div 
                    key={msg.id} 
                    className={`relative w-full p-1 flex
                        ${msg.senderId != userId ? 'justify-start' : 'justify-end'}
                    `}>
                        <div className={`max-w-2/3 min-w-12 font-sans text-xs p-2
                            ${msg.senderId != userId ? 'bg-[#333333] rounded-r-xl rounded-bl-xl text-[#E0E0E0]' : 'bg-[#1E88E5] rounded-l-xl rounded-br-xl text-[#ffffff]'}
                        `}>
                            <div className="flex flex-col space-y-1">
                                <ExpandableText text={msg.text} maxChars={120} />
                                <div className="flex items-center justify-end space-x-[2px]">
                                    <p className="font-sans text-[0.7rem]">{getTime(msg.createdAt)}</p>
                                    {
                                        msg.senderId == userId && 
                                        <BsCheckAll className={`text-lg ${msg.seen ? 'text-cyan-200' : 'text-[#e0e0e0]'}`}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </main>
            <div className="fixed bottom-0 w-full p-2 bg-[#121212] z-10">
                <div className="w-full h-8 rounded-full bg-[#2c2c2c] flex items-center">
                    <input 
                    type="text" 
                    className="apperance-none outline-none w-[90%] h-full px-5 py-1 font-sans text-[#e0e0e0] font-normal text-xs" 
                    placeholder="Type something"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    />
                    <div className="w-[10%] h-full p-1 flex items-center justify-center">
                        <button 
                        onClick={sendMessage}
                        className="cursor-pointer"><IoMdSend className="text-xl text-[#e0e0e0]"/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page