import { Toaster } from "sonner";
import { deliveriesData } from "./data/deliveryData";
import DeliveryCard from "../../components/deliveryStatus/DeliveryCard";

const DeliveryStatus = () => (
  <div className="space-y-4  min-h-full">
    <Toaster position="top-right" richColors closeButton />
    <h2 className="text-sm font-bold text-gray-800">
      Active Deliveries <span className="text-gray-400 font-normal">( {deliveriesData.length} )</span>
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {deliveriesData.map((d) => (
        <DeliveryCard key={d.id} delivery={d} />
      ))}
    </div>
  </div>
);

export default DeliveryStatus;