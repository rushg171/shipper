import { randomUUID } from "crypto"
import Image from "next/image"
export default function ShipmentDetails(){
    const titles = ["Name","QUANTITY", "WEIGHT & DIMENTIONS", "VOLUME WEIGHT", "ASSIGNE PACKAGES", "CHARGE WEIGHT","RATE","COST"]
    const data = [
            ["iPhone 14", "1", ["11.00" , "25 x 30 x 54"], "","","Flat","$10.00","$10.00"],
            ["Macbook Pro", "1", ["30.00" , "25 x 30 x 54"], "","","Flat","$50.00","$50.00"],
            ["Box 1", "", ["52.00" , "25 x 30 x 54"], "291.37","3","Actual Weight","$5.00","$10.00"],
            ["Box 2", "", ["52.00" , "25 x 30 x 54"], "291.37","3","Volume Weight","$5.00","$100.00"]        
        ]
    
    return(
        <div className="flex-col p-6">
            <span className="text-zinc-800 font-bold text-xl">Shipment Details</span>
            <div className="rounded-2xl overflow-hidden mt-3">
                <table className="border-collapse border-1 border-gray-200 w-full">
                    <thead>
                        <tr>
                            {
                                titles.map((title, ind)=>{
                                    return <th key={randomUUID()} className="p-1 py-3 border-1 text-white border-gray-200 bg-primary-500">
                                                                                                {(ind>0&&ind<5) ? <div className="flex justify-center gap-0.5">{title} <Image src={"/icons/arrows-sort.svg"} alt="Sort" width={24} height={24}/></div> : title}

                                            </th>
                                })
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(row=>{
                                return <tr>
                                    {   
                                        row.map((value,ind)=>{
                                            return <td key={randomUUID()} className={`text-zinc-800 ${ind!=row.length-1?"text-center":"text-end"} text p-2 py-3 border-1 border-gray-200 bg-white`}>
                                                <div>
                                                    {
                                                        ind==2?<div><span>{value[0]}</span><span className="mx-2 text-neutral-300">|</span><span>{value[1]}</span></div>:value

                                                    }
                                                </div> 
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