import React from 'react'

type props = {
    isOpen?: boolean
}

const Overlay: React.FC<props> = ({isOpen = false}) => {
    return (
        <div 
        className={`${isOpen ? 'block' : 'hidden'} 
        w-screen h-screen bg-black fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-75 pointer-events-none`}>
        </div>
    )
}

export default Overlay