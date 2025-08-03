import Image from "next/image"
import Link from "next/link"

export default function Topbar(){
    let stages = ["Create Shipment", "Repacking & Consolidation", "Shipment Details", "Shiping Method", "Summary & Confirmation"];
    let currentStage = 4;
    return (
        <div className="bg-neutral-100 flex flex-row justify-center items-center h-20 px-6 w-full">
            <div className="flex text-zinc-700 font-medium justify-center items-center gap-3 w-full">
                {
                    stages.map((stageName, ind)=>{
                        let isActive = ind == currentStage;
                        return (
                            <div className="flex gap-3 items-center">
                                <div className={`rounded-full flex h-8 w-8 ${isActive? "bg-blue-700":"bg-green-500"} justify-center items-center p-1`}>
                                    {
                                        ind>=currentStage?
                                        <span className="text-white">{ind+1}</span>:
                                        <Image 
                                            src={"/icons/check-circle.svg"}
                                            alt="Notifications"
                                            width={16}
                                            height={16}
                                        />}
                                </div>
                                <span>{stageName}</span>
                                {ind != stages.length-1 && <div className="w-8 h-0.5 bg-blue-700 rounded-2xl"/>}
                            </div>
                        )
                    })
                }
                
            </div>
        </div>
    )
}