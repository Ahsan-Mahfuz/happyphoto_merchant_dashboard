import { Pencil } from "lucide-react";
import { statusConfig } from "../../Pages/inventory/data/inventoryData";

const StatusDot = ({ status }) => {
  const cfg = statusConfig[status] ?? { dot: "bg-gray-400", color: "text-gray-600" };
  return (
    <span className={`flex items-center gap-1.5 text-sm font-medium ${cfg.color}`}>
      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dot}`} />
      {status}
    </span>
  );
};

const InventoryTable = ({ items, onUpdate }) => {
  if (items.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 text-center text-sm text-gray-400">
        No inventory items found.
      </div>
    );
  }

  return (
    <>
      {/* Desktop table */}
      <div className="hidden sm:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {["Product Name", "Current Stock", "Status", "Last Updated", "Action"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors">
                <td className="px-5 py-4 font-semibold text-gray-800">{item.name}</td>
                <td className="px-5 py-4 font-bold text-gray-800">{item.stock}</td>
                <td className="px-5 py-4"><StatusDot status={item.status} /></td>
                <td className="px-5 py-4 text-gray-400 text-xs">{item.lastUpdated}</td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => onUpdate(item)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-green-700 transition"
                  >
                    <Pencil size={13} /> Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="flex justify-between items-start mb-1">
              <p className="text-sm font-semibold text-gray-800">{item.name}</p>
              <button
                onClick={() => onUpdate(item)}
                className="flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-green-700 transition"
              >
                <Pencil size={12} /> Update
              </button>
            </div>
            <div className="flex items-center justify-between mt-1">
              <StatusDot status={item.status} />
              <span className="text-sm font-bold text-gray-700">Stock: {item.stock}</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">{item.lastUpdated}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default InventoryTable;