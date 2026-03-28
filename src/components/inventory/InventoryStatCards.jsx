import { Package, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const cards = [
  {
    label: "Total Products",
    key: "total",
    icon: Package,
    iconColor: "text-purple-600",
    iconBg: "bg-purple-50",
  },
  {
    label: "In Stock",
    key: "inStock",
    icon: CheckCircle,
    iconColor: "text-green-600",
    iconBg: "bg-green-50",
  },
  {
    label: "Low Stock",
    key: "lowStock",
    icon: AlertTriangle,
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-50",
  },
  {
    label: "Out of Stock",
    key: "outOfStock",
    icon: XCircle,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
  },
];

const InventoryStatCards = ({ stats }) => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
    {cards.map(({ label, key, icon: Icon, iconColor, iconBg }) => (
      <div
        key={key}
        className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
      >
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}>
          <Icon size={20} className={iconColor} />
        </div>
        <div>
          <p className="text-xs text-gray-400 font-medium">{label}</p>
          <p className="text-2xl font-bold text-gray-800 leading-tight">{stats[key]}</p>
        </div>
      </div>
    ))}
  </div>
);

export default InventoryStatCards;