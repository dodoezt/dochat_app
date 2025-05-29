import React, { useEffect } from 'react'

const ChatNavbar = () => {
    return (
        <>
            <div className="">
                <img src="/assets/doChat.svg" alt="doChat-logo" className="w-auto h-9 bg-[#e0e0e0] px-2 rounded-full" />
            </div>     
            <div className="">
                <button className="aspect-square flex flex-col items-center justify-center space-y-[3px]">
                    <div className="aspect-square w-auto h-[4px] rounded-full bg-[#e0e0e0]"></div>
                    <div className="aspect-square w-auto h-[4px] rounded-full bg-[#e0e0e0]"></div>
                    <div className="aspect-square w-auto h-[4px] rounded-full bg-[#e0e0e0]"></div>
                </button>
            </div>
        </>
    )
}

export default ChatNavbar