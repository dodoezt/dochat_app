import React from 'react'
import { CiMenuFries } from "react-icons/ci";

const Navbar = () => {
    return (
        <div className='w-full h-16 border-b border-b-[#2C2C2C] flex items-center justify-between px-4'>
            <div className="flex-[2]">
                <div className="">
                    <img src="/assets/doChat.svg" alt="doChat-logo" className="w-auto h-9 bg-[#e0e0e0] px-2 rounded-full" />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-end">
                <button className="p-2 border border-[#2c2c2c] rounded-full">
                    <CiMenuFries className='text-[#e0e0e0] text-xl'/>
                </button>
            </div>
        </div>
    )
}

export default Navbar