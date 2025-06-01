import React from 'react'

type props = {
    title: string
    description: string
}

const AlertPopUp: React.FC<props> = ({title, description}) => {
  return (
    <div className='w-full h-full p-5 border border-[#FF5E5E] rounded-lg'>
        <header className="w-full py-2 border-b border-b-[#2c2c2c]">
            <h1 className="font-sans font-medium text-[#e0e0e0]">{title}</h1>
        </header>
        <main className="w-full">
            <p className="font-sans text-["></p>
        </main>
        <footer></footer>
    </div>
  )
}

export default AlertPopUp