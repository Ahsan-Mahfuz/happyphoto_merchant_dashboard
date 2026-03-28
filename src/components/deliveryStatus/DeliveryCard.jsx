import { Progress } from "antd";
import { MapPin, Phone, Truck, Clock } from "lucide-react";
import { toast } from "sonner";
import { statusConfig } from "../../Pages/deliveryStatus/data/deliveryData";

const DeliveryCard = ({ delivery }) => {
  const cfg = statusConfig[delivery.status] ?? { bg: "bg-gray-100", text: "text-gray-600", border: "border-gray-200" };

  const progressColor =
    delivery.status === "Out for Delivery" ? "#7c3aed" :
    delivery.status === "Pickup Pending"   ? "#ea580c" :
    delivery.status === "Dasher Assigned"  ? "#2563eb" : "#16a34a";

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-4 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-xs text-gray-400 font-medium">Order</p>
          <p className="text-base font-bold text-gray-800">#{delivery.id}</p>
          <p className="text-xs text-gray-500 mt-0.5">To: {delivery.customer}</p>
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border} whitespace-nowrap`}>
          {delivery.status}
        </span>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Store</span>
          <span>Customer</span>
        </div>
        <Progress
          percent={delivery.progress}
          showInfo={false}
          strokeColor={progressColor}
          trailColor="#f3f4f6"
          strokeWidth={6}
        />
      </div>

      {/* Dasher + ETA */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Truck size={16} className="text-purple-600" />
          </div>
          <div>
            <p className="text-[11px] text-gray-400 font-medium">Dasher</p>
            <p className="text-sm font-bold text-gray-800">{delivery.dasher.name}</p>
            <p className="text-xs text-gray-400">{delivery.dasher.vehicle}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1.5 justify-end">
            <Clock size={14} className="text-blue-500" />
            <p className="text-[11px] text-gray-400 font-medium">ETA</p>
          </div>
          <p className="text-sm font-bold text-gray-800">{delivery.eta}</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-100" />

      {/* Address + Contact */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-gray-500 text-sm">
          <MapPin size={14} className="text-gray-400 flex-shrink-0" />
          <span>{delivery.address}</span>
        </div>
        <button
          onClick={() => toast.success(`Calling ${delivery.dasher.name}...`)}
          className="flex items-center gap-1.5 text-purple-600 text-sm font-semibold hover:text-purple-800 transition"
        >
          <Phone size={14} />
          Contact {delivery.dasher.name.split(" ")[0]}.
        </button>
      </div>
    </div>
  );
};

export default DeliveryCard;