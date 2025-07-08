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
    
    const convId: string | null = searchParams.get('c') || null
    
    if(!userInfo) return null;
    return (
        <div className='relative w-screen h-screen'>
            <div className={`absolute w-screen h-screen ${convId ? 'hidden' : 'block'}`}>
                <Conversations userInfo={userInfo}/>
            </div>
            <div className={`w-screen h-screen absolute z-10 ${convId ? 'block' : 'hidden'}`}>
                {convId && (
                    <Conversation convId={convId} userInfo={userInfo}/>
                )}
            </div>
        </div>
    )
}

export default page