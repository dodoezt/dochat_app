'use client'
import React, { useEffect, useState } from 'react'

const page = () => {

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="w-2/3 p-5 rounded-2xl border border-[rgb(44,44,44)]">
                <header className="w-full flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <img src="/assets/doChat.svg" alt="logo-doChat" className="w-auto h-10 bg-[#e0e0e0] px-2 rounded-full" />
                    </div>
                </header>
                <main className="w-full space-y-5">
                    <div className="w-full flex flex-col">
                        <label htmlFor="whatsapp-number" className="font-sans text-[#e0e0e0] font-medium text-xs">Whatsapp Number</label>
                        <div className="w-full h-8 relative flex items-center justify-center rounded-lg overflow-hidden">
                            <img src="/assets/whatsapp.png" alt="whatsapp" className="h-full p-1 aspect-square bg-[#2c2c2c] absolute left-0" />
                            <input
                            type="number"
                            id='whatsapp-number'
                            className="appearance-none outline-none w-full h-full py-2 pl-9 font-sans font-medium text-[#e0e0e0] text-xs border border-[#2c2c2c] rounded-lg"/>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default page