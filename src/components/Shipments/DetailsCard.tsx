import Image from "next/image"
import Details from "./Details"

export default function DetailsCard(){
    const detailsData = [
        {
            title:"Customer name",
            icon:"user",
            value:"Adedamola Olarele"
        },
        {
            title:"Business name",
            icon:"company",
            value:"Dolf Technologies"
        },
        {
            title:"Unit no.",
            icon:"unit",
            value:"1E"
        }
    ]
    return (
        <div className="grid grid-cols-3 h-30 bg-white rounded-xl mx-6 justify-center items-center px-6 mt-50">
            {
                detailsData.map((details, ind)=>{
                    return (
                        <Details key={details.icon} details={details} ind={ind}/>
                    )
                })
            }
        </div>
    )
}

