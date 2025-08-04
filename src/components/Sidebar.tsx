'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"

export default function Sidebar(){
    let sidebarOptions = ["dashboard", "customers","orders","packages","shipments","warehouse-management","shipment-settings","wallet-request","customer-support"]
    const pathname = usePathname()
    
    return(
        <div className="fixed top-0 left-0 flex flex-col bg-primary-500 min-w-20 justify-start items-center z-10 min-h-screen max-h-screen">
            <Link href={"/"} className="w-full">
                <div className="flex bg-white justify-center items-center w-full h-20">
                    <Image
                        src="/icons/logo.png"
                        alt="Shipper"
                        width={37}
                        height={31}
                        className="p-4 w-16 h-auto"
                    />
                </div>
            </Link>
            <nav className="flex flex-col w-full">
            {
                sidebarOptions.map((item)=>{
                    const isActive = pathname == "/"+item;
                    return <Link href={`/${item}`}>
                    <div key={item} className={`flex hover:bg-blue-200 ${isActive? "bg-orange-500": ""}  justify-center items-center h-16 w-full`}>
                        <Image
                        src={`/icons/${item}.svg`}
                        alt={item}
                        width={24}
                        height={24}
                        />
                        </div>
                    </Link>
                })
            }
            </nav>
            
        </div>
    )
}