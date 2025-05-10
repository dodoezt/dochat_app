import React from 'react'

type props = {
    isOpen: boolean
    title: string
    description: string
    onConfirm: () => void
    onCancel: () => void
}

const ConfirmPopUp:React.FC<props> = (
    {
        isOpen = false,
        title,
        description,
        onConfirm,
        onCancel
    }
) => {
      
    const handleConfirm = () => {
        onConfirm()
    }

    const handleCancel = () => {
        onCancel()
    }

    return (
        <>
            <div className={`${isOpen ? 'block' : 'hidden'} w-full h-full bg-[#121212] border border-[#e0e0e0] rounded-2xl z-[120] p-5 space-y-4`}> 
                <header className="w-full pb-1 border-b border-b-[#2c2c2c]">
                    <h1 className="font-sans text-[#e0e0e0] font-medium">{title}</h1>
                </header>
                <main className="w-full">
                    <p className="font-sans text-[#e0e0e0] text-xs">{description}</p>
                </main>
                <footer className="w-full flex items-center justify-between gap-5">
                    <button 
                    onClick={handleCancel}
                    className="flex-1 border border-[#2c2c2c] py-1 font-sans font-medium text-[#2c2c2c] text-xs text-center rounded-lg cursor-pointer transition-all ease-in-out duration-200 hover:border-[#333333] hover:text-[#333333]"
                    >
                        Cancel
                    </button>
                    <button 
                    onClick={handleConfirm}
                    className="flex-1 bg-[#e0e0e0] border border-[#e0e0e0] py-1 font-sans font-medium text-[#121212] text-xs text-center rounded-lg transition-all ease-in-out duration-200 hover:bg-transparent hover:text-[#e0e0e0] cursor-pointer"
                    >
                        continue
                    </button>
                </footer>
            </div>
        </>
    )
}

export default ConfirmPopUp