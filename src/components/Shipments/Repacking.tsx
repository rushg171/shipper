import { randomUUID } from "crypto"
import Image from "next/image";
import { title } from "process";
export default function RepackingAndConsolidation(){
    const titles = ["","TRACKING", "WEIGHT & DIMENTIONS", "RECEIVED", "DESCRIPTION", "SELECT REPACK OPTIONS","FEES"]
    const data = [
        ["1","xxxxxxxx 310326",["90.90","20 x 20 x 20"],"JUL-07-2025","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Do not repack", "$0.00"],
        ["2","xxxxxxxx 310327",["90.90","20 x 20 x 20"],"JUL-07-2025","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Remove outer box only", "$2.00"],
        ["3","xxxxxxxx 310328",["90.90","20 x 20 x 20"],"JUL-07-2025","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Full repack", "$5.00"]
    ]
    
    return(
        <div className="flex-col p-6">
            <span className="text-zinc-800 font-bold text-xl">Repacking & Consolidation</span>
            <div className="rounded-2xl overflow-hidden mt-3">
                <table className="border-collapse border-1 border-gray-200 w-full">
                    <thead>
                        <tr>
                            {
                                titles.map((title,ind)=>{
                                    return <th key={title} className={`p-1 py-3 border-1 text-center text-white border-gray-200 bg-primary-500`}>
                                                {(ind>0&&ind<4) ? <div className="flex justify-center gap-0.5">{title} <Image src={"/icons/arrows-sort.svg"} alt="Sort" width={24} height={24}/></div> : title}
                                            </th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(row=>{
                                return <tr key={randomUUID()}>
                                    {   
                                        row.map((value,ind)=>{
                                            return <td key={randomUUID()} className={`text-zinc-800 text-center text p-2 min-4-5 py-3 border-1 border-gray-200  bg-white`}>
                                                {ind!=row.length-2?
                                                <div>
                                                    {
                                                        ind==2?<div><span>{value[0]}</span><span className="mx-2 text-neutral-300">|</span><span>{value[1]}</span></div>:value

                                                    }
                                                </div> : 
                                                <div className="flex w-full justify-between">{value} <Image src={"/icons/info.svg"} alt="Sort" width={16} height={16}/></div>}
                                            </td>
                                        })
                                    }
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}