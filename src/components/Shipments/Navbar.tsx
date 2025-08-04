import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return (
        <div className="bg-lightbackground-200 flex flex-row justify-between items-center h-20 pl-6 pr-2 border-b-1 border-gray-300">
            <div className="flex text-zinc-700 text ml-6">
                <Image 
                    src={"/icons/shipments-black.svg"}
                    alt="Shipments"
                    width={24}
                    height={24}
                    className="h-6 w-6"
                />
                <span className="pr-1 pl-2">Shipments</span>
                <span>/ Create New</span>
            </div>
            <div className="flex gap-6">
                <Link href={"/notifications"}>
                <div className="border-1 hover:bg-orange-300 border-neutral-300 rounded-full flex h-10 w-10 justify-center items-center">
                    <Image 
                        src={"/icons/bell-circle.svg"}
                        alt="Notifications"
                        width={40}
                        height={40}
                    />
                </div>
                </Link>
                <Link href={"/menu"}>
                <div className="border-1 border-neutral-300 hover:bg-orange-300 rounded-full flex h-10 w-10 justify-center items-center">
                    <Image 
                        src={"/icons/menu-circle.svg"}
                        alt="Menu"
                        width={40}
                        height={40}
                    />
                </div>
                </Link>
            </div>
        </div>
    )
}