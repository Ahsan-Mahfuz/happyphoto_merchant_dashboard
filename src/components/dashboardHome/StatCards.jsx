import { ClipboardList, Clock, DollarSign, Star } from "lucide-react";
import { statsData } from "../../Pages/dashboardHome/data/dashboardData";

const iconMap = {
  ClipboardList,
  Clock,
  DollarSign,
  Star,
};

const StatCard = ({ label, value, iconName, iconColor, iconBg }) => {
  const Icon = iconMap[iconName];
  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
      <div
        className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 ${iconBg}`}
      >
        <Icon size={22} className={iconColor} />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-xl font-bold text-gray-800 leading-tight">{value}</p>
      </div>
    </div>
  );
};

const StatCards = () => (
  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
    {statsData.map((stat) => (
      <StatCard key={stat.id} {...stat} />
    ))}
  </div>
);

export default StatCards;