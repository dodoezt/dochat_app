import React from 'react'

type props = {
    isOpen?: boolean
    setIsOpen?: (isOpen: boolean) => void
}

const Overlay: React.FC<props> = ({isOpen = false, setIsOpen}) => {
    return (
        <button
        onClick={() => setIsOpen && setIsOpen(false)}
        className={`${isOpen ? 'block' : 'hidden'} 
        w-screen h-screen bg-black fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75 pointer-events-auto z-[100]`}>
        </button>
    )
}

export default Overlay