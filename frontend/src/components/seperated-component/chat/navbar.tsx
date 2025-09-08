import React, { useEffect, useState, useRef, act } from 'react'
import { useRouter } from 'next/navigation'
import { UserInfoType } from '@/types/user'
import { UseBoolean } from '@/hooks/useBoolean'

import { MdAccountCircle } from 'react-icons/md'
import { 
    FaUser,
    FaUserFriends,
} from "react-icons/fa";
import { 
    IoMdNotifications,
    IoMdSettings
} from "react-icons/io";

const ChatNavbar = ({userInfo} : {userInfo: UserInfoType}) => {
    const isMenuOpen = UseBoolean(false);
    const isMenuClicked = UseBoolean(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const router = useRouter()

    const isSocialOpen = UseBoolean(false);
    const [menuItems, setMenuItems] = useState([
        {
            name: 'Profile',
            icon: <FaUser className='text-base text-white'/>,
            navigate: '/profile',
        },
        {
            name: 'Social',
            icon: <FaUserFriends className='text-lg text-white'/>,
            navigate: '/profile',
        },
        {
            name: 'Notifications',
            icon: <IoMdNotifications className='text-lg text-white'/>,
            navigate: '/notifications'
        },
        {
            name: 'Settings',
            icon: <IoMdSettings className='text-lg text-white'/>,
            navigate: '/settings'
        },
    ])

    useEffect(() => {
        console.log('menuItems', menuItems);
    }, [menuItems]);

    function handleMenuToggle() {
        if(isMenuClicked.value) return;
        isMenuClicked.setTrue();

        const toggledValue = !isMenuOpen.value;
        isMenuOpen.toggle();
        if(toggledValue) {
            menuRef.current!.classList.replace('hidden', 'flex');
            setTimeout(() => {
                menuRef.current!.classList.replace('opacity-0', 'opacity-100');
                menuRef.current!.classList.replace('-translate-y-5', '-translate-y-0');
                isMenuClicked.setFalse();
            }, 100)
        } else {
            menuRef.current!.classList.replace('opacity-100', 'opacity-0');
            menuRef.current!.classList.replace('-translate-y-0', '-translate-y-5');
            setTimeout(() => {
                menuRef.current!.classList.replace('flex', 'hidden');
                isMenuClicked.setFalse();
            }, 200)
        }
    }

    return (
        <>
            <button 
            onClick={() => handleMenuToggle()}
            id='overlay' 
            className= {`${isMenuOpen.value ? 'block' : 'hidden'} w-screen h-screen pointer-events-auto z-20 fixed top-0 left-0`}></button>       
            <h1 className="font-roboto text-[#e0e0e0] text-xl font-medium">YipYap</h1>
            <div className="relative flex items-center justify-center">
                <button
                onClick={handleMenuToggle}  
                className="flex items-center justify-center overflow-hidden rounded-full cursor-pointer h-9 aspect-square">
                    {userInfo?.user_atribut.pfp_id ? (
                        <img src={`${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL}${userInfo?.user_atribut.pfp_id}${process.env.NEXT_PUBLIC_APPWRITE_BUCKET_URL_END}`} alt={`${userInfo.username} pfp`} className='w-full h-full' />
                    ) : (
                        <div className="flex items-center justify-center h-full aspect-square">
                            <MdAccountCircle className='text-4xl text-white'/>
                        </div>
                    )}
                </button>
                <div id='menu' ref={menuRef} className='absolute right-[50%] w-56 transition-all duration-200 ease-in-out bg-[#121212] top-[110%] z-[30] hidden flex-col opacity-0 rounded-b-2xl rounded-tl-2xl border border-[#2c2c2c] -translate-y-5'>
                    {menuItems.map((item, idx) => {
                        return (
                            <div key={idx} className="relative w-full">
                                <button
                                onClick={() => {
                                    router.push(item.navigate!);
                                    isMenuOpen.setFalse();
                                }}
                                className="flex items-center justify-between w-full h-10 p-3 hover:bg-[#1a1a1a] cursor-pointer"
                                >
                                    <div className="flex items-center gap-2">
                                        {item.icon}
                                        <span className="font-sans text-sm font-normal text-white">
                                            {item.name}
                                        </span>
                                    </div>
                                </button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default ChatNavbar