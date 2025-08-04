'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import path from "path"

export default function Sidebar(){
    let sidebarOptions = ["dashboard", "customers","orders","packages","shipments","warehouse-management","shipment-settings","wallet-request","customer-support"]
    let bottomSidebarOptions = ["profile","settings","logout"]

    const pathname = usePathname()
    
    return(
        <div className="fixed top-0 left-0 flex flex-col bg-primary-500 min-w-16 justify-start items-center z-10 min-h-screen max-h-screen h-full">
            <Link href={"/"} className="w-full">
                <div className="flex bg-white justify-center items-center w-full h-16">
                    <Image
                        src="/icons/logo.png"
                        alt="Shipper"
                        width={37}
                        height={31}
                        className="p-4 w-16 h-auto"
                    />
                </div>
            </Link>
            <div className="flex flex-col justify-between w-full h-full pb-4">
                <nav className="flex flex-col w-full">
            {
                sidebarOptions.map((item)=>{
                    const isActive = pathname == "/"+item;
                    return <Link key={item} href={`/${item}`}>
                    <div className={`flex hover:bg-blue-200 ${isActive? "bg-orange-500": ""}  justify-center items-center h-12 w-full`}>
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
            <nav>
            {
                bottomSidebarOptions.map((item)=>{
                    const isActive = pathname == "/"+item;
                    return <Link key={item} href={`/${item}`}>
                    <div className={`flex hover:bg-blue-200 ${isActive? "bg-orange-500": ""}  justify-center items-center h-12 w-full`}>
                        <Image
                        className="rounded-full w-6 h-6"
                        src={item=="profile"?`/icons/${item}.jpg`:`/icons/${item}.svg`}
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
            
        </div>
    )
}