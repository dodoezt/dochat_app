'use client'
import { useChatContext } from '@/components/contexts/children/chatContext';
import Conversations from '@/components/seperated-component/chat/conversations';

interface Props {}

const page: React.FC<Props> = ({}) => {

    return (
        <div className='relative w-screen h-screen'>
            <Conversations />
        </div>
    )
}

export default page
