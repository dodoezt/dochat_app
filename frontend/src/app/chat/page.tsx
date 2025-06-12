'use client'
import socket from '@/lib/socket'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo, useRef } from 'react';
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/navigation';
import { BsCheckAll, BsCheck } from "react-icons/bs";
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider';
import { UseBoolean } from '@/hooks/useBoolean';

import ExpandableText from '@/components/functions/expandableText';

import { IoMdSend, IoMdArrowBack } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";

type members = {
    userId: number;
    username: string;
    email: string;
}

type MessageType = {
    id: string;
    conversationId: string;
    senderId: number;
    content: string;
    sentAt: string;
    status?: 'NOT_DELIVERED' | 'DELIVERED' | 'SEEN';
};

type RecievedMsgType = MessageType & {
    temporaryId?: string;
}

interface Props {}

const page: React.FC<Props> = ({}) => {
    const auth = useUnifiedAuth();
    const { userInfo, loadingGetUser } = auth;

    const userId = useRef<number | null>(null);
    const router = useRouter()

    const SeenBottomRef = useRef<HTMLDivElement>(null);
    const UnSeenBottomRef = useRef<HTMLDivElement>(null);

    const LastOrSeenMessageRef = useRef<HTMLDivElement>(null)
    const UnSeenMessaeRef = useRef<HTMLDivElement>(null)

    const searchParams = useSearchParams()
    const convId = searchParams.get('convId')

    const [messages, setMessages] = useState<MessageType[]>([])
    const [groupedMessages, setGroupedMessages] = useState<Record<string, MessageType[]>>({})
    const [members, setMembers] = useState<members[]>([])
    const [newMsg, setNewMsg] = useState<number>(0)
    
    const [textInput, setTextInput] = useState<string>('')
    const [isTyping, setIsTyping] = useState(false);
    const [hasEmittedTyping, setHasEmittedTyping] = useState<boolean>(false)
    
    const getConversationLoading = UseBoolean(true)
    
    const [debounceInput] = useDebounce(textInput, 500)

    useEffect(() => {
        console.log('user info mounted')
        if (userInfo?.userId) {
            userId.current = userInfo.userId;
            console.log('userId set:', userId.current)
        }
    }, [userInfo])

    useEffect(() => {
        console.log('User ID:', userId.current);
    }, [userId]);

    useEffect(() => {
        if (messages) {
            setGroupedMessages(groupMessagesByDate(messages));
            console.log('Messages:', messages);
        }

    }, [messages]);
    
    useEffect(() => {
        if(!getConversationLoading.value){
            LastOrSeenMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [getConversationLoading.value])


    useEffect(() => {
        if(!convId || !userId.current) return

        if(!socket.connected) socket.connect()
            
        socket.emit('join-room', {
            userId: userId.current,
            conversationId: convId
        })
        socket.on('receive-message', (msg: RecievedMsgType) => {
            setMessages((prev) => {
                const existingIdx = prev.findIndex((m) => 
                    msg.senderId === userId.current
                        ? m.id === msg.temporaryId
                        : m.id === msg.id
                )
                if (msg.senderId === userId.current) {
                    // console.log('Received message from self, updating status');
                    if (existingIdx !== -1){
                        const updatedMessages = [...prev]
                        updatedMessages[existingIdx] = {
                            ...updatedMessages[existingIdx],
                            id: msg.id, // Ganti ID dari temporaryId ke ID yang sebenarnya
                            status: 'DELIVERED', // Update status menjadi DELIVERED
                        };
                        return updatedMessages;
                    } else {
                        return [...prev, {
                            id: msg.id,
                            conversationId: msg.conversationId,
                            senderId: msg.senderId,
                            content: msg.content,
                            sentAt: msg.sentAt,
                            status: 'DELIVERED', // Set status menjadi DELIVERED
                        }]
                    }

                } else {
                    const alreadyExists = prev.some((m) => m.id === msg.id);

                    if (alreadyExists) return prev;
                    return [
                        ...prev,
                        {
                            id: msg.id,
                            conversationId: msg.conversationId,
                            senderId: msg.senderId,
                            content: msg.content,
                            sentAt: msg.sentAt,
                            status: 'DELIVERED',
                        },
                    ];
                }
            });
        });


        socket.on('message-status', (status) => {
            
        })

        return () => {
            socket.off("receive-message");
            socket.disconnect();
        };
    }, [convId, userInfo?.userId]);

    useEffect(() => {
        if (textInput.length > 0 && !hasEmittedTyping) {
            setHasEmittedTyping(true)
            socket.emit('status-typing', { 
                conversationId: convId, 
                userId: userId.current, 
                typing: true 
            });
        }
    }, [textInput]);

    useEffect(() => {
        if (debounceInput.length === 0) return;
            setHasEmittedTyping(false)
            socket.emit('status-typing', { 
                conversationId: convId,
                userId: userId.current, 
                typing: false 
            });
    }, [debounceInput]);

    useEffect(() => {
        socket.on("show-typing-status", ({ senderId, typing }) => {
            if (senderId !== userId.current) {
                setIsTyping(typing);
            }
        });

        return () => {
            socket.off("show-typing-status");
        };
    }, [userInfo?.userId]);

    useEffect(() => {
        if (!convId || loadingGetUser?.value) return;
        
        if (!loadingGetUser?.value && userId.current) {
            getConversation()
        }
    }, [loadingGetUser?.value, userId.current])
    
    const sendMessage = () => {
        if (!textInput.trim()) return;

        const temporaryId = crypto.randomUUID();

        const newMsg: MessageType = {
            id: temporaryId,
            conversationId: convId!,
            senderId: userId.current!,
            content: textInput,
            sentAt: new Date().toISOString(),
            status: 'NOT_DELIVERED',
        }

        socket.emit("send-message", newMsg);

        setTextInput("");
        setMessages((prev) => [...prev, newMsg])
        
        setTimeout(() => {
            SeenBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 50)
    };

    const getConversation = async () => {
        getConversationLoading.setTrue()
        try {
            const response = await fetch(`/api/conversations/${convId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })

            const data = await response.json();
            if(data.status === 403 && data.error === 'Forbidden') {
                router.push('/')
                return;
            }
            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch conversation members');
            }

            const { members, conversation } = data;
            setMembers(members);
            setMessages(conversation.messages);

            const groupedMessages = groupMessagesByDate(conversation.messages);
            setGroupedMessages(groupedMessages);

            console.log('Members:', members);
        } catch (error) {
            throw new Error('Failed to fetch conversation members');
        } finally {
            console.log('fungsi selesai')
            getConversationLoading.setFalse();
        }
    }

    const handleClickArrow = () => {
        UnSeenMessaeRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})

        socket.emit('arrowClicked', convId)
    }

    const handleBack = () => {
        router.replace('/');
        socket.emit('leave-room', {
            userId: userId.current,
            conversationId: convId
        });
    }

    const getTime = (date: string) => {
        const d = new Date(date); // konversi ISO string ke Date object
        const hours = d.getHours().toString().padStart(2, '0');
        const minutes = d.getMinutes().toString().padStart(2, '0');

        return `${hours}:${minutes}`;
    };

    const dateFormat = (dateString: string) => {
        const now = new Date();
        const todayStr = now.toDateString();

        const yesterday = new Date();
        yesterday.setDate(now.getDate() - 1);
        const yesterdayStr = yesterday.toDateString();

        if (dateString === todayStr) {
            return 'Today';
        } else if (dateString === yesterdayStr) {
            return 'Yesterday';
        } else {
            const parsedDate = new Date(dateString); // ubah kembali ke Date object
            return parsedDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        }
    }

    function groupMessagesByDate(messages: MessageType[]) {
        return messages.reduce((groups: Record<string, MessageType[]>, msg) => {
            const date = new Date(msg.sentAt).toDateString();
            if (!groups[date]) groups[date] = [];
            groups[date].push(msg);
            // console.log('groups', groups)
            return groups;
        }, {});
    }

    const unSeenMessages = useMemo(() => {
        return Object.values(groupedMessages)
        .flat()
        .filter(message => message.senderId !== userId.current && message.status !== 'SEEN')
    }, [groupedMessages])

    const firstUnSeenMessage = useMemo(() => {return unSeenMessages[0]?.id}, [groupedMessages]) 
    
    if(getConversationLoading.value || loadingGetUser?.value) return <div className="font-sans text-[#e0e0e0]">loading...</div>

    
    return (
        <div className="relative w-screen h-screen">
            <header className="fixed top-0 flex items-center justify-between w-full p-3 h-[60px] border-b border-b-[#2c2c2c] bg-[#121212] z-10">
                <div className="flex items-center flex-1 h-full space-x-2">
                    <button 
                    onClick={handleBack}
                    className="flex items-center justify-center h-full cursor-pointer aspect-square ">
                        <IoMdArrowBack className='text-[#e0e0e0] text-lg'/>
                    </button>
                    <div className="aspect-square w-9 rounded-full border-[1px] border-[#e0e0e0]"></div>
                    <div className="flex flex-col h-full">
                        <div className="flex items-start h-1/2">
                            <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">{members.length === 1 && members[0].username}</h1>
                            {/* <span className="text-[#888888] font-normal text-xs">@dodoezt</span> */}
                        </div>
                        <div className="flex items-end h-1/2">
                            <p className="font-sans text-[#888888] text-xs">{isTyping ? 'typing...' : 'online'}</p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </header>
            <main className="w-full h-full pt-[72px] pb-12 overflow-y-scroll">
                <div className="w-full">
                    {Object.entries(groupedMessages).map(([dateKey, messagesInDate]) => (
                    <div key={dateKey}>
                        <div className="flex items-center justify-center w-full my-2">
                            <h1 className="px-2 py-1 bg-[#2c2c2c] font-sans text-xs text-[#e0e0e0] rounded-lg">
                                {dateFormat(dateKey)}
                            </h1>
                        </div>
                        {messagesInDate.map((msg) => (
                        <div 
                            key={msg.id}
                            ref={msg.id === firstUnSeenMessage ? UnSeenMessaeRef : null}
                            className="w-full"
                        >
                            <div
                            className={`relative w-full p-1 flex ${
                                msg.senderId != userId.current ? 'justify-start' : 'justify-end'
                            }`}
                            >
                                <div
                                    className={`max-w-2/3 min-w-12 font-sans text-xs p-2
                                    ${
                                        msg.senderId != userId.current
                                        ? 'bg-[#333333] rounded-r-xl rounded-bl-xl text-[#E0E0E0]'
                                        : 'bg-[#1E88E5] rounded-l-xl rounded-br-xl text-[#ffffff]'
                                    }`}
                                >
                                    <div className="flex flex-col space-y-1">
                                        <ExpandableText text={msg.content} maxChars={120} />
                                        <div className="flex items-center justify-end space-x-[2px]">
                                            <p className="font-sans text-[0.7rem]">
                                                {getTime(msg.sentAt)}
                                            </p>
                                            {msg.senderId === userId.current && (
                                                msg.status === 'NOT_DELIVERED' ? (
                                                    <BsCheck className="text-lg text-[#e0e0e0]" />
                                                ) : (
                                                    <BsCheckAll
                                                    className={`text-lg ${
                                                        msg.status === 'SEEN'
                                                        ? 'text-cyan-200'
                                                        : 'text-[#e0e0e0]'
                                                    }`}
                                                    />
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    ))}
                    <div ref={SeenBottomRef} />
                    {unSeenMessages.length > 0 && (
                        <button 
                        onClick={() => UnSeenMessaeRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})}
                        className="aspect-square animate-bounce flex items-center justify-center rounded-full bg-[#121212] border border-[#2c2c2c] cursor-pointer p-1 fixed bottom-12 left-1/2 -translate-x-1/2">
                            <FaArrowDown className='text-lg text-[#e0e0e0]'/>
                        </button>
                    )}
                </div>
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