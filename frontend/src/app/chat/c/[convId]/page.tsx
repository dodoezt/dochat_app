'use client'
import React, { useState } from 'react'
import { useChatContext } from '@/components/contexts/children/chatContext'

import Conversation from '@/components/seperated-component/chat/room';

import { MessageType } from '@/components/contexts/children/chatContext';

const page = () => {
    const [messages, setMessages] = useState<MessageType[]>([]);
    const { currentConvId } = useChatContext();  
    
    return (
        <div>
            <Conversation convId={currentConvId} />
        </div>
    )
}

export default page