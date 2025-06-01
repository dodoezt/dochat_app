
interface Props {}

const page: React.FC<Props> = ({}) => {
    return (
        <div className="relative w-screen h-screen">
            <header className="flex items-center justify-between w-full p-3 h-[60px] border-b border-b-[#2c2c2c]">
                <div className="flex items-center flex-1 h-full space-x-2">
                    <div className="aspect-square w-9 rounded-full border-[1px] border-[#e0e0e0]"></div>
                    <div className="flex flex-col h-full">
                        <div className="flex items-start h-1/2">
                            <h1 className="font-sans font-medium text-[#e0e0e0] text-sm">si Ganteng | <span className="text-[#888888] font-normal text-xs">@dodoezt</span></h1>
                        </div>
                        <div className="flex items-end h-1/2">
                            <p className="font-sans text-[#888888] text-xs">online</p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </header>
            <div className="absolute bottom-0 w-full p-3">
                <div className="w-full h-8 rounded-full bg-[#2c2c2c]"></div>
            </div>
        </div>
    )
}

export default page