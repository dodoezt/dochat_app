import React, { useEffect, useRef } from 'react'

import { CiSearch } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";

type props = {
  handleSearchFocus: () => void
  handleSearchBlur: () => void
  isSearchOnFocus: boolean;
}

const ChatSearchBar:React.FC<props> = 
  ({
    handleSearchFocus,
    handleSearchBlur, 
    isSearchOnFocus
  }) => {

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(isSearchOnFocus && searchInputRef.current){
      searchInputRef.current.focus()
    }
  }, [])
  
  return (
    <div className='w-full h-14 py-2 relative flex items-center justify-center'>
        <div className="h-full flex-1 flex items-center">

          {isSearchOnFocus && (
            <div className="aspect-square h-full flex items-center justify-center">
              <button 
              className="w-full h-full text-lg text-[#e0e0e0] flex items-center justify-center cursor-pointer"
              onClick={handleSearchBlur}
              >
                <IoArrowBack />
              </button>
            </div>
          )}

          <input 
          ref={searchInputRef}
          type="text" 
          className="appearance-none outline-none flex-1 h-full pl-4 border-y border-l border-[#2c2c2c] bg-transparent rounded-l-full font-sans text-[#e0e0e0] font-normal text-sm"
          placeholder='What are you looking for?'
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          />
        </div>
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