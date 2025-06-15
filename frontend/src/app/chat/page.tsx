'use client'
import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useMemo, useRef } from 'react';
import { useUnifiedAuth } from '@/components/contexts/parents/authProvider';

import Conversations from '@/components/seperated-component/chat/conversations';
import Conversation from '@/components/seperated-component/chat/conversation';

interface Props {}

const page: React.FC<Props> = ({}) => {
    const auth = useUnifiedAuth();
    const { userInfo } = auth;
    
    const searchParams = useSearchParams()
    const convId = searchParams.get('c')
    
    if(!userInfo) return null;

    return (
        <div className='w-screen h-screen'>
            {convId ? (
                <Conversation convId={convId} userInfo={userInfo}/>
            ) : (
                <Conversations userInfo={userInfo}/>
            )}
        </div>
    )
}

export default page