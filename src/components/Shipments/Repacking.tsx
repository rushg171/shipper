import { randomUUID } from "crypto"

export default function RepackingAndConsolidation(){
    const titles = ["","TRACKING", "WEIGHT & DIMENTIONS", "RECEIVED", "DESCRIPTION", "SELECT REPACK OPTIONS","FEES"]
    const data = [
        ["1","xxxxxxxx 310326","90.90 | 20 x 20 x 20","JUL-07-2025","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Do not repack", "$0.00"],
        ["2","xxxxxxxx 310327","90.90 | 20 x 20 x 20","JUL-07-2025","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Remove outer box only", "$2.00"],
        ["3","xxxxxxxx 310328","90.90 | 20 x 20 x 20","JUL-07-2025","Lorem Ipsum is simply dummy text of the printing and typesetting industry.", "Full repack", "$5.00"]
    ]
    
    return(
        <div className="flex-col p-6">
            <span className="text-zinc-800 font-bold text-xl">Repacking & Consolidation</span>
            <div className="rounded-2xl overflow-hidden mt-3">
                <table className="border-collapse border-1 border-gray-200 w-full">
                    <thead>
                        <tr>
                            {
                                titles.map(title=>{
                                    return <th key={title} className={`p-1 py-3 border-1 text-center border-gray-200 bg-blue-800`}>
                                                {title}
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
                                            return <td key={randomUUID()} className={`text-zinc-800 ${ind!=row.length-2?"text-center":"text-end"} text-sm p-2 min-4-5 py-3 border-1 border-gray-200  bg-white`}>
                                                {ind!=row.length-2?value:value}
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