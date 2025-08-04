import DetailsCard from "@/components/Shipments/DetailsCard";
import Navbar from "@/components/Shipments/Navbar";
import RepackingAndConsolidation from "@/components/Shipments/Repacking";
import ShipmentDetails from "@/components/Shipments/ShipmentDetails";
import ShippingMethod from "@/components/Shipments/ShippingMethod";
import Topbar from "@/components/Shipments/Topbar";
import Totals from "@/components/Shipments/Totals";

export default function Shipments(){
    return <div className="flex flex-col w-full bg-lightbackground-200">
        
        <div className="fixed top-0 right-0 w-full pl-20 bg-lightbackground-200">
            <Navbar/>
            <Topbar />
        </div>
        <div className="w-full pl-20 pb-60 bg-lightbackground-200 max-w-screen overflow-x-clip">
            <DetailsCard />
            <ShippingMethod />
            <RepackingAndConsolidation />
            <ShipmentDetails /></div>
        <div className="fixed bottom-0 right-0 pl-20 w-full bg-lightbackground-200"><Totals /></div>
    </div>
}