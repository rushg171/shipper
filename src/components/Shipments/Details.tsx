import Image from "next/image";

export default function Details({details, ind}:any){
    return (
        <div className="flex justify-between mr-6">
            <div className={`flex gap-3 w-full ${ind!=2?"border-r-1 border-gray-300":""} pr-6`}>
                <div className="h-11 w-11 rounded-full bg-blue-100 flex justify-center items-center">
                    <Image
                        src={`/icons/${details.icon}.svg`}
                        alt="User"
                        width={20}
                        height={20}
                    />
                </div>
                <div className="flex flex-col justify-between text-zinc-800">
                    <span className="text-sm">{details.title}</span>
                    <span className="text-xl font-semibold">{details.value}</span>
                </div>
            </div>
        </div>
    )
}

