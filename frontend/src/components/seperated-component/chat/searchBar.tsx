import React, { useEffect, useRef } from 'react'

import { CiSearch } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";

type props = {
  isSearchOnFocus: boolean;
  handleSearchBlur: () => void;
  handleSearchFocus: () => void;
  setKeyword: (keyword: string) => void
}

const ChatSearchBar:React.FC<props> = 
  ({ 
    isSearchOnFocus,
    handleSearchBlur,
    handleSearchFocus,
    setKeyword
  }) => {

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if(isSearchOnFocus && searchInputRef.current){
      searchInputRef.current.focus()
    }
  }, [])
  
  return (
    <div className='relative flex items-center justify-center w-full py-2 h-14'>
        <div className="flex items-center flex-1 h-full">

          {isSearchOnFocus && (
            <div className="flex items-center justify-center aspect-square h-2/3">
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
          onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center w-auto h-full aspect-square">
            <button 
            className="aspect-square h-full pr-4 text-xl text-[#e0e0e0] border-y border-r border-[#2c2c2c] rounded-r-full flex items-center justify-center cursor-pointer">
                <CiSearch className=''/>
            </button>
        </div>
    </div>
  )
}

export default ChatSearchBar