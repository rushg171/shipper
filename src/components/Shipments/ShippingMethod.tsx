'use client'

import Image from "next/image"
import { useState } from "react"
export default function ShippingMethod() {

    const [isCollapsed, setIsCollapsed] = useState(false)
    const consigneeDetails = [
        {
            title:"Full Name",
            value:"John Carter"
        },
        {
            title:"Email Address",
            value:"jogn@wakabuy.com"
        },
        {
            title:"Phone Number",
            value:"+1 01539 702257"
        },
        {
            title:"Address Line",
            value:"20 Cooper Square"
        },
        {
            title:"Country",
            value:"USA"
        },
    ]
    const shippingDetails = [
        {
            title:"Method Name",
            value:"John Carter"
        },
        {
            title:"Shipping Dates",
            value:"jogn@wakabuy.com"
        },
        {
            title:"Carries",
            icon:"waka-logo.svg"
        },
        {
            title:"ETA",
            value:"20 Cooper Square"
        },
        {
            title:"Price",
            value:"USA"
        },
    ]
    return (
        <div className="flex-col p-6">
            <div className="flex w-full justify-between">
                <span className="text-zinc-800 font-bold text-xl">Shipping Method</span>
                <button className="pr-6 " onClick={()=>setIsCollapsed(!isCollapsed)}>
                    {!isCollapsed?<span className="text-blue-400">Collapse</span>:<span className="text-primary-500">Expand</span>}
                </button>
            </div>
            <div className={`grid grid-cols-2 mt-6 gap-5 transition-all duration-500 ${isCollapsed?"max-h-0 opacity-0":"opacity-100"} overflow-hidden`}>
                <div className="flex flex-col bg-white rounded-2xl">
                    <span className="text-zinc-800 font-bold text-xl px-6 pt-5">Consignee Details</span>
                    {consigneeDetails.map(item=>{
                        return (
                            <div key={item.title} className="flex-col px-6 border-b-1 border-neutral-200 py-4">
                                <div><span className="text-xl text-zinc-800">{item.title}</span></div>
                                <div><span className="text-lg text-neutral-400">{item.value}</span></div>
                            </div>
                        )
                    })}
                    <div className="grid grid-cols-3 px-6 py-4">
                        <div className="flex-col">
                            <div><span className="text-xl text-zinc-800">State</span></div>
                            <div><span className="text-lg text-neutral-400">Florida</span></div>
                        </div>
                        <div className="flex-col">
                            <div><span className="text-xl text-zinc-800">City</span></div>
                            <div><span className="text-lg text-neutral-400">Sebring</span></div>
                        </div>
                        <div className="flex-col">
                            <div><span className="text-xl text-zinc-800">ZIP</span></div>
                            <div><span className="text-lg text-neutral-400">33175</span></div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col bg-white rounded-2xl">
                    <span className="text-zinc-800 font-bold text-xl px-6 pt-5">Shipping Details</span>
                    {shippingDetails.map(item=>{
                        return (
                            <div key={item.title} className="flex-col px-6 border-b-1 border-neutral-200 py-4">
                                <div><span className="text-xl text-zinc-800">{item.title}</span></div>
                                {item.value && <div><span className="text-lg text-neutral-400">{item.value}</span></div>}
                                {item.icon && <Image className="pt-1" src={`icons/${item.icon}`} alt={item.title} width={172} height={27}/>} 
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}