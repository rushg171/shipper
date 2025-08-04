export default function Totals(){
    return (
    <div className="flex-col w-full">
    <div className="grid grid-cols-5 p-6 gap-6 w-full justify-center items-center">
        <textarea className="col-span-2 rounded-xl bg-white text-black text-sm border-1 border-gray-500 h-26 text-start p-3" placeholder="Add Details"></textarea>
        <div className="grid grid-cols-3 col-span-3 rounded-xl bg-blue-100 text-black text-sm border-1 border-primary-500 h-26 text-start p-3 justify-center items-center">
            <div className="flex-col justify-center items-center text-center border-r-1 border-blue-400">
                <div><span className="font-bold">Total Cost</span></div>
               <div><span className="font-bold text-2xl">$100</span></div>
            </div>
            {/* <div className="w-px h-10 bg-blue-300 "></div> */}
            <div className="flex-col justify-center text-center items-center border-r-1 border-blue-400">
                <div><span className="font-bold">Total Cost</span></div>
               <div><span className="font-bold text-2xl">$10</span></div>
            </div>
            {/* <div className="w-px h-5 bg-blue-300 "></div> */}
            <div className="flex-col justify-center text-center items-center ">
                <div><span className="font-bold">Total Cost</span></div>
               <div><span className="font-bold text-primary-500 text-3xl">$510</span></div>
            </div>
        </div>
        </div>
        <div className="flex justify-end w-full pb-6 px-6 gap-4">
            <button className="bg-orange-200 hover:shadow-2xs px-4 rounded-full min-w-40 text text-black font-semibold">{"< Back"}</button>
            <button className="bg-primary-500 rounded-full min-w-40 hover:bg-orange-500 text-white font-semibold">Save for later</button>
            <button className="bg-blue-200 border-1 border-primary-500 p-4 rounded-full  text-primary-500 font-semibold">Create Shipment</button>
            
        </div>
    </div>
    )
}