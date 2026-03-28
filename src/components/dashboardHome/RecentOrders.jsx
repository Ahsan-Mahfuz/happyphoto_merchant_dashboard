import { ChevronRight } from "lucide-react";
import { recentOrders, statusStyles } from "../../Pages/dashboardHome/data/dashboardData";
import { toast } from "sonner";

const StatusBadge = ({ status }) => {
  const style = statusStyles[status] ?? { bg: "bg-gray-100", text: "text-gray-600" };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${style.bg} ${style.text}`}
    >
      {status}
    </span>
  );
};

const OrderRow = ({ id, name, items, amount, status, time }) => (
  <div
    onClick={() => toast.info(`Opening order #${id}`)}
    className="flex items-center justify-between px-1 py-3 border-b border-gray-50 last:border-0 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors duration-150 group"
  >
    {/* Left: ID + Name */}
    <div className="flex items-center gap-3 min-w-0">
      <span className="text-xs font-bold text-gray-400 w-8 flex-shrink-0">{id}</span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-gray-800 truncate">{name}</p>
        <p className="text-xs text-gray-400">
          {items} items · $ {amount.toFixed(2)}
        </p>
      </div>
    </div>

    {/* Right: Status + Time + Arrow */}
    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 ml-2">
      <StatusBadge status={status} />
      <span className="text-xs text-gray-400 hidden sm:block whitespace-nowrap">{time}</span>
      <ChevronRight
        size={16}
        className="text-gray-300 group-hover:text-gray-500 transition-colors"
      />
    </div>
  </div>
);

const RecentOrders = () => (
  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
    {/* Header */}
    <div className="flex items-center justify-between mb-3">
      <h2 className="text-sm font-bold text-gray-800">Recent Orders</h2>
      <button
        onClick={() => toast.info("Viewing all orders…")}
        className="text-xs text-violet-600 font-semibold hover:text-violet-800 transition-colors"
      >
        View All
      </button>
    </div>

    {/* Rows */}
    <div>
      {recentOrders.map((order) => (
        <OrderRow key={order.id} {...order} />
      ))}
    </div>
  </div>
);

export default RecentOrders;