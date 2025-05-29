import React from 'react'

import { CiSearch } from "react-icons/ci";

const ChatSearchBar = () => {
  return (
    <div className='w-full h-14 py-2 relative flex items-center justify-center'>
        <input 
        type="text" 
        className="appearance-none outline-none flex-1 h-full pl-4 border-y border-l border-[#2c2c2c] bg-transparent rounded-l-full font-sans text-[#e0e0e0] font-normal text-sm"
        placeholder='What are you looking for?'
        />
        <div className="aspect-square w-auto h-full flex items-center justify-center">
            <button 
            className="aspect-square h-full pr-4 text-xl text-[#e0e0e0] border-y border-r border-[#2c2c2c] rounded-r-full flex items-center justify-center cursor-pointer">
                <CiSearch className=''/>
            </button>
        </div>
    </div>
  )
}

export default ChatSearchBar