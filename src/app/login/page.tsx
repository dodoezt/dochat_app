'use client'
import { Client, Account } from 'appwrite'
import React, { useEffect, useState } from 'react'
import countries from '@/data/southeastAsiaCountries.json';
import { useGoogleAuth } from '@/components/contexts/children/googleAuthcContext';

const page = () => {
    const [selectedCountry, setSelectedCountry] = useState(countries[0])
    const [loading, setLoading] = useState(true)
    const [isListShown, setIsListShown] = useState(false)

    const { loginWithGoogle } = useGoogleAuth()

    const getCountryCode = async () => {
        const res = await fetch('https://ipapi.co/json/');
        const data = await res.json()
        setSelectedCountry(countries.find(country => country.code === data.country_code) || countries[0])
    }

    useEffect(() => {
        getCountryCode()
    }, [])

    const toggleList = () => {
        const listShown = isListShown;
        setIsListShown(!listShown)
    }

    // useEffect(() => {
    //     console.log(selectedCountry)
    // }, [selectedCountry])

    // if (loading) {
    //     return (
    //         <h1 className="text-[#e0e0e0]">Loading...</h1>
    //     )
    // } 

    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className="w-3/4 p-5 rounded-2xl border border-[#2c2c2c] space-y-4">
                <header className="w-full flex items-center justify-center">
                    <div className="flex flex-col items-center">
                        <img src="/assets/doChat.svg" alt="logo-doChat" className="w-auto h-10 bg-[#e0e0e0] px-2 rounded-full" />
                    </div>
                </header>
                <main className="w-full space-y-5">
                    <div className="w-full flex flex-col">
                        <div className="flex gap-1">
                            <div className="aspect-square w-4 h-4">
                                <img src="/assets/whatsapp.png" alt="whatsapp" className="w-full h-full"/>
                            </div>
                            <label htmlFor="whatsapp-number" className="font-sans text-[#e0e0e0] font-medium text-xs mb-1">Whatsapp Number</label>
                        </div>
                        <div className="w-full h-8 flex items-center justify-center rounded-lg relative mb-2">
                            <button 
                                onClick={toggleList}
                                className="h-full p-1 bg-[#2c2c2c] ronded-l-lg flex items-center gap-1 relative cursor-pointer">
                                <img
                                    src={selectedCountry.flag}
                                    alt={selectedCountry.name}
                                    className='w-5 h-auto'
                                />
                                <span className="text-[#e0e0e0] font-sans font-medium text-xs">
                                    {selectedCountry.dial_code}
                                </span>
                            </button>
                            <input
                                type="number"
                                id='whatsapp-number'
                                className="appearance-none outline-none flex-1 h-full pl-1 font-sans font-medium text-[#e0e0e0] text-xs tracking-wider border border-[#2c2c2c] rounded-r-lg"/>
                            <div className={`w-max h-32 absolute top-full left-0 overflow-y-scroll border border-[#2c2c2c] bg-[#121212]
                            ${isListShown ? 'block' : 'hidden'}    
                            `}>
                                {countries
                                .filter(country => country.code !== selectedCountry.code)
                                .map((country, index) => {
                                    return (
                                        <button 
                                        key={index} 
                                        className="h-8 p-1 flex items-center gap-1 cursor-pointer"
                                        onClick={() => {
                                            setSelectedCountry(countries.find(countriesCountry => countriesCountry.code === country.code) || countries[0])
                                            setIsListShown(false)
                                        }}
                                        >
                                            <img 
                                            src={country.flag} 
                                            alt={country.name}
                                            className="w-5 h-auto"/>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="w-full space-y-1">
                            <p className="font-sans text-[0.65rem] text-[#e0e0e0]">We'll send you a verification msg</p>
                            <button className="w-full bg-[#e0e0e0] font-sans font-medium text-sm rounded-lg py-1 px-1 cursor-pointer transition-all ease-in-out duration-200 border border-[#e0e0e0] hover:bg-transparent hover:text-[#e0e0e0]">
                                Send Notification
                            </button>
                        </div>
                    </div>
                    <div className="w-full relative flex items-center justify-center">
                        <h1 className="z-10 absolute text-sm text-[#e0e0e0] bg-[#121212] px-1 py-1">or</h1>
                        <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#2c2c2c] w-full py-[1px] rounded-full"></span>
                    </div>
                    <div className="w-full">
                        <button className="w-full h-8 flex items-center justify-center gap-2 border border-[#2c2c2c] cursor-pointer
                        "
                        onClick={loginWithGoogle}
                        >
                            <img src="/assets/google.png" alt="google-logo" className="w-auto h-1/2"/>
                            <span className="font-sans font-medium text-[#e0e0e0] text-xs">Continue with Google</span>
                        </button>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default page