import { AlertTriangle } from "lucide-react";
import { lowStockItems } from "../../Pages/dashboardHome/data/dashboardData";
import { toast } from "sonner";

const StockRow = ({ name, left, threshold }) => {
  const isEmpty = left === 0;
  const isLow = left > 0 && left <= threshold;

  const leftColor = isEmpty
    ? "text-red-500"
    : isLow
    ? "text-orange-500"
    : "text-green-600";

  return (
    <div className="py-3 border-b border-gray-50 last:border-0">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-gray-800 truncate pr-2">{name}</p>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className={`text-sm font-bold ${leftColor}`}>{left} left</span>
          <button
            onClick={() => toast.success(`Updating stock for "${name}"`)}
            className="text-xs text-violet-600 font-semibold hover:text-violet-800 transition-colors"
          >
            Update
          </button>
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-0.5">Threshold: {threshold}</p>
    </div>
  );
};

const LowStockAlerts = () => (
  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
    {/* Header */}
    <div className="flex items-center gap-2 mb-3">
      <AlertTriangle size={16} className="text-orange-500 flex-shrink-0" />
      <h2 className="text-sm font-bold text-gray-800">Low Stock Alerts</h2>
    </div>

    {/* Rows */}
    <div>
      {lowStockItems.map((item) => (
        <StockRow key={item.id} {...item} />
      ))}
    </div>
  </div>
);

export default LowStockAlerts;