import Image from "next/image"
import Link from "next/link"

export default function Navbar(){
    return (
        <div className="bg-neutral-100 flex flex-row justify-between items-center h-20 px-6 border-b-1 border-gray-300">
            <div className="flex text-zinc-700 font-medium">
                <Image 
                    src={"/icons/shipments-black.svg"}
                    alt="Shipments"
                    width={24}
                    height={24}
                    className="p-1"
                />
                <span className="pr-1">Shipments</span>
                <span>/Create New</span>
            </div>
            <div className="flex gap-2">
                <Link href={"/notifications"}>
                <div className="border-1 border-neutral-300 rounded-full flex h-10 w-10 justify-center items-center">
                    <Image 
                        src={"/icons/bell-circle.svg"}
                        alt="Notifications"
                        width={40}
                        height={40}
                    />
                </div>
                </Link>
                <Link href={"/menu"}>
                <div className="border-1 border-neutral-300 rounded-full flex h-10 w-10 justify-center items-center">
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