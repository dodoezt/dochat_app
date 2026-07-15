'use client'
import socket from '@/lib/socket'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo, useRef } from 'react';
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/navigation';
import { useGlobalContext } from '@/components/contexts/parents/globalProvider';
import { produce } from 'immer';

import { UseBoolean } from '@/hooks/useBoolean';
import ExpandableText from '@/functions/expandableText';
import Conversations from '@/components/seperated-component/chat/conversations';
import { Dots } from '@/components/ui/spinner';
import { useAuthContext } from '@/components/contexts/children/authContext';
import { MessageType, useChatContext } from '@/components/contexts/children/chatContext'; 

import { BsCheckAll, BsCheck } from "react-icons/bs";
import { IoMdSend, IoMdArrowBack, IoMdPersonAdd } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa6";
import { MdAccountCircle, MdPersonOff } from 'react-icons/md';

type members = {
    userId: number;
    username: string;
    user_atribut: {
        pfp_id: string | null;
    }
}
type RecievedMsgType = MessageType & {
    temporaryId?: string;
}

type props = {
    convId: string | null,
}

const Conversation: React.FC<props> = ({convId}) => {
    const [messages, setMessages] = useState<MessageType[]>([])
    const [groupedMessages, setGroupedMessages] = useState<Record<string, MessageType[]>>({})
    const [newMsg, setNewMsg] = useState<number>(0)
    const [members, setMembers] = useState<members[]>([])
    
    const [textInput, setTextInput] = useState<string>('')
    const [isTyping, setIsTyping] = useState(false);
    const [hasEmittedTyping, setHasEmittedTyping] = useState<boolean>(false)

    const { setConversations, userInfo, onlineUsers } = useChatContext();
    const router = useRouter()
    const [debounceInput] = useDebounce(textInput, 500)
    
    const getConversationLoading = UseBoolean(true)
    
    const FirstUnSeenMsgRef = useRef<HTMLDivElement>(null);
    const LastOldMsgRef = useRef<HTMLDivElement>(null)
    const MessageInputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (messages) {
            setGroupedMessages(groupMessagesByDate(messages));
            console.log('Messages:', messages);
        }
    }, [messages]);
    
    useEffect(() => {
        console.log(getConversationLoading.value)
        if(!getConversationLoading.value){
            LastOldMsgRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
    }, [getConversationLoading.value])

    useEffect(() => {
        socket.on('message:received', (msg: RecievedMsgType) => {
            setMessages((prev) => {
                const existingIdx = prev.findIndex((m) => 
                    msg.senderId === userInfo.userId
                        ? m.id === msg.temporaryId
                        : m.id === msg.id
                )
                if (msg.senderId === userInfo.userId) {
                    // console.log('Received message from self, updating status');
                    if (existingIdx !== -1){
                        const updatedMessages = [...prev]
                        updatedMessages[existingIdx] = {
                            ...updatedMessages[existingIdx],
                            id: msg.id,
                            status: 'DELIVERED', 
                        };
                        return updatedMessages;
                    } else {
                        return [...prev, {
                            id: msg.id,
                            conversationId: msg.conversationId,
                            senderId: msg.senderId,
                            senderUsername: msg.senderUsername,
                            senderPfp_id: msg.senderPfp_id,
                            content: msg.content,
                            sentAt: msg.sentAt,
                            status: 'DELIVERED',
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
                            senderUsername: msg.senderUsername,
                            senderPfp_id: msg.senderPfp_id,
                            content: msg.content,
                            sentAt: msg.sentAt,
                            status: 'DELIVERED',
                        },
                    ];
                }
            });
        });

        socket.on('message:status:update', ({temporaryId, status}) => {
            setMessages((prev) => 
                prev.map((msg) => (
                    msg.id === temporaryId ? {...msg, status} : msg
                ))
            )
        })

        socket.on('room:user-joined', ({userId}) => {
            setMessages((prev) => 
                prev.map((msg) => (
                    msg.senderId !== userId ? {...msg, status: 'SEEN'} : msg
                ))
            )

            setConversations((prev) =>
                prev!.map((conv) => 
                    conv.conversationId === convId ? {
                        ...conv,
                        conversation: {
                            ...conv.conversation,
                            messages: conv.conversation.messages.map((msg) => 
                                msg.senderId !== userId && msg.status !== 'SEEN' ? {
                                    ...msg,
                                    status: 'SEEN'
                                } : msg)
                        }
                    } : conv
                ))
            
            // updateMessagesStatus()
        })

        // socket.on('room:user-joined', async (user) => {
        //     // user's messages with different user.userId the status become SEEN
        //     const updateMsg = await fetch(`/api/v1/conversations/${convId}/messages`, {
        //         method: 'PATCH',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(user.userId),
        //     })
            
        //     setMessages((prev) => {
        //         return prev.map((msg) => {
        //             if (msg.senderId !== user.userId  && msg.status !== 'SEEN') {
        //                 return { ...msg, status: 'SEEN' };
        //             }
        //             return msg;
        //         });
        //     })
        // })
    }, []);

    // const updateMessagesStatus = async () => {
    //     const updateMsg = await fetch(`/api/v1/conversations/${convId}/messages`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify({targetMembers: members}),
    //     })
    // }

    //NOTE: FIX JOIN DAN LEAVE ROOM PADA SOCKETNYA

    useEffect(() => {
        if (textInput.trim().length > 0 && !hasEmittedTyping) {
            socket.emit('typing:status', { 
                conversationId: convId, 
                userId: userInfo.userId, 
                typing: true 
            });
            setHasEmittedTyping(true)
        }
    }, [textInput]);

    useEffect(() => {
        setHasEmittedTyping(false)
        socket.emit('typing:status', { 
            conversationId: convId,
            userId: userInfo.userId, 
            typing: false 
        });
    }, [debounceInput]);

    useEffect(() => {
        socket.on("typing:show", ({ senderId, typing }) => {
            if (senderId !== userInfo.userId) {
                setIsTyping(typing);
            }
        });

        return () => {
            socket.off("typing:show");
        };
    }, []);
    
    useEffect(() => {
        setTimeout(() => {
            MessageInputRef.current?.focus()
        }, 500)
    }, [])

    useEffect(() => {
        getConversation()        
    }, [])

    const messageRef = (msgId: string) => {
        switch (msgId) {
            case lastOldMessage : 
                return LastOldMsgRef
            case firstUnSeenMessage :
                return FirstUnSeenMsgRef
            default :
                return null
        }
    }
    
    const sendMessage = () => {
        if (!textInput.trim()) return;

        const temporaryId = crypto.randomUUID();

        const newMsg: MessageType = {
            id: temporaryId,
            conversationId: convId!,
            senderId: userInfo.userId!,
            senderPfp_id: userInfo.user_atribut.pfp_id,
            senderUsername: userInfo.username,
            content: textInput,
            sentAt: new Date().toISOString(),
            status: 'NOT_DELIVERED',
        }

        socket.emit("message:send", newMsg);

        setTextInput("");
        setMessages((prev) => [...prev, newMsg])
        // setConversations((prev) =>
        //     prev!.map((conv) =>
        //         conv.conversationId === convId
        //         ? {
        //             ...conv,
        //             conversation: {
        //                     ...conv.conversation,
        //                     messages: [newMsg, ...conv.conversation.messages],
        //                 },
        //             }
        //         : conv
        //     )
        // );

        
        setTimeout(() => {
            MessageInputRef.current?.focus()
            LastOldMsgRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 50)
    };

    const getConversation = async () => {
        if(!convId) return
        getConversationLoading.setTrue()
        try {
            const response = await fetch(`/api/v1/conversations/${convId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include'
            })

            const data = await response.json();
            if (!response.ok) {
                router.push('/chat')
                return;
            }

            const { members, conversation } = data;
            setMembers(members);
            setMessages(conversation.messages);

            socket.on('update-not-delivered-messages', ({ userId }) => {
                setMessages(
                    produce((draft) => {
                        draft.forEach((msg) => {
                            if(msg.senderId !== userId && msg.status === 'NOT_DELIVERED') {
                                msg.status = 'DELIVERED';
                            }
                        })
                    })
                )
            })

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
        LastOldMsgRef.current?.scrollIntoView({behavior: 'smooth', block: 'center'})
    }

    const handleBack = () => {
        router.push('/chat')
        // socket.emit('leave-room', {
        //     userId: userInfo.userId,
        //     conversationId: convId
        // });
    }

    const getTime = (date: string) => {
        const d = new Date(date); 
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
            const parsedDate = new Date(dateString); 
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
        if(messages.length === 0) return
        return Object.values(groupedMessages)
        .flat()
        .filter(message => message.senderId !== userInfo.userId && message.status !== 'SEEN')
    }, [groupedMessages])

    const lastOldMessage = useMemo(() => {
        if(messages.length === 0) return
        if(unSeenMessages?.length === 0 || !unSeenMessages) return messages[messages.length - 1].id;
        const firstUnSeenIndex = messages.findIndex((msg) => msg.id === unSeenMessages[0].id)
        console.log(firstUnSeenIndex)
        return messages[firstUnSeenIndex - 1].id
    }, [messages])

    const firstUnSeenMessage = useMemo(() => {
        if(!unSeenMessages) return;
        return unSeenMessages[0]?.id}, [groupedMessages]
    ) 

    if (getConversationLoading.value || !members.length) {
        return <div className="flex items-center justify-center w-screen h-screen">
            <p className="text-white">Loading conversation...</p>
        </div>
    }

    return (
        <div className="relative w-screen h-screen bg-[#121212]">
            <header className="fixed top-0 flex items-center justify-between w-full p-3 border-b border-b-[#2c2c2c] bg-[#121212] z-20">
                <div className="flex items-center flex-1 h-full space-x-2">
                    <button 
                    onClick={handleBack}
                    className="flex items-center justify-center h-full cursor-pointer aspect-square ">
                        <IoMdArrowBack className='text-[#e0e0e0] text-lg'/>
                    </button>
                    <button 
                    onClick={() => router.push(`/profile/${members[0].username}`)}
                    className="flex items-center h-full gap-2 cursor-pointer">
                        <div className="flex items-center justify-center w-8 overflow-hidden rounded-full aspect-square">
                            {members?.[0]?.user_atribut?.pfp_id ? (
                                <img 
                                    src={`${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL}${members[0].user_atribut.pfp_id}${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL_END}`} 
                                    alt={members[0].username || ''} 
                                    className="" 
                                />
                            ) : (
                                <MdAccountCircle className='text-5xl text-[#e0e0e0]' />
                            )}
                        </div>
                        <div className="flex flex-col h-full">
                            <div className="flex items-start h-1/2">
                                <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">
                                    {members?.[0]?.username || 'Loading...'}
                                </h1>
                            </div>
                            <div className="flex items-end h-1/2">
                                <p className="font-sans text-[#888888] text-xs">
                                    {members?.[0]?.userId && onlineUsers?.find((user: any) => user.userId === members[0].userId) 
                                        ? isTyping 
                                            ? 'typing...' 
                                            : 'online' 
                                        : 'offline'}
                                </p>
                            </div>
                        </div>
                    </button>
                </div>
            </header>
            <main className="w-full h-[92vh] pt-16 flex flex-col items-center overflow-y-scroll px-5">
                {messages.length === 0 && (
                    <div className="w-[80%] p-5 rounded-xl border border-[#2c2c2c] flex flex-col items-center justify-center space-y-3 mb-5">
                        <div className="h-12 overflow-hidden rounded-full aspect-square">
                            <img src={`${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL}${members[0].user_atribut.pfp_id}${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL_END}`} alt={`${members[0].username}`} className="object-cover w-full h-full" />
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="flex items-center gap-2 px-2 py-1 border border-[#2c2c2c] rounded-lg cursor-pointer">
                                <IoMdPersonAdd className='text-base text-white'/>
                                <p className="font-sans text-sm text-white">Add</p>
                            </button>
                            <button className="flex items-center gap-2 px-2 py-1 border border-red-300 rounded-lg cursor-pointer">
                                <MdPersonOff className='text-base text-red-400'/>
                                <p className="font-sans text-sm text-red-400">Block</p>
                            </button>
                        </div>
                        <h1 className="font-sans text-white font-lg">Say hi to <span className="font-medium">{members[0].username}</span></h1>
                    </div>
                )}
                <div className="flex flex-col justify-end w-full">
                    {Object.entries(groupedMessages).map(([dateKey, messagesInDate]) => (
                    <div className='w-full' key={dateKey}>
                        <div className="relative flex items-center justify-center w-full py-4">
                            <h1 className="px-2 py-1 bg-[#2c2c2c] font-sans text-xs text-[#e0e0e0] rounded-lg absolute">
                                {dateFormat(dateKey)}
                            </h1>
                        </div>
                        {messagesInDate.map((msg) => (
                            <div 
                                key={msg.id}
                                ref={messageRef(msg.id)}
                                className={`w-full`}
                            >
                                <div className={`${msg.id === firstUnSeenMessage ? 'block' : 'hidden'} w-full relative flex items-center justify-center py-1`}>
                                    <span className="w-full h-[1px] bg-[#2c2c2c] absolute z-0"></span>
                                    <h1 className="absolute z-10 font-sans text-xs text-white p-1 bg-[#121212]">New Messages</h1>
                                </div>
                                <div
                                className={`relative w-full p-1 flex ${
                                    msg.senderId != userInfo.userId ? 'justify-start' : 'justify-end'
                                }`}
                                >
                                    <div
                                        className={`max-w-2/3 min-w-12 font-sans text-xs 
                                        ${
                                            msg.senderId != userInfo.userId
                                            ? 'bg-[#333333] rounded-r-xl rounded-bl-xl text-[#E0E0E0]'
                                            : 'bg-[#00284c] rounded-l-xl rounded-br-xl text-[#ffffff]'
                                        }`}
                                    >
                                        <div className="flex items-center
                                         space-x-[6px] flex-wrap w-full text-wrap p-2">
                                            <ExpandableText text={msg.content} maxChars={120} />
                                            <div className="flex items-center justify-end space-x-[2px] ml-auto">
                                                <p className="font-sans text-[0.7rem]">
                                                    {getTime(msg.sentAt)}
                                                </p>
                                                {msg.senderId === userInfo.userId && (
                                                    msg.status === 'NOT_DELIVERED' ? (
                                                        <BsCheck className="text-lg text-[#e0e0e0]" />
                                                    ) : (
                                                        <BsCheckAll
                                                        className={`text-lg ${
                                                            msg.status === 'SEEN'
                                                            ? 'text-blue-500'
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
                    {unSeenMessages && unSeenMessages!.length > 0 && (
                        <button 
                        onClick={() => FirstUnSeenMsgRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'})}
                        className="aspect-square animate-bounce flex items-center justify-center rounded-full bg-[#121212] border border-[#2c2c2c] cursor-pointer p-1 fixed bottom-12 left-1/2 -translate-x-1/2 z-[11]">
                            <FaArrowDown className='text-lg text-[#e0e0e0]'/>
                        </button>
                    )}
                </div>
            </main>
            <div className="h-[8vh] p-2 w-full bg-[#121212] z-10">
                <div className="w-full h-full rounded-full bg-[#2c2c2c] flex items-center">
                    <input 
                    ref={MessageInputRef}
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
} //NOTE : ROMBAK SELURUH MESSAGING

export default Conversation