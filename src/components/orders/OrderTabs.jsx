import { ordersData, statusConfig, tabs } from "../../Pages/orders/data/ordersData";


const OrderTabs = ({ activeTab, onTabChange }) => {
  const getCount = (tab) =>
    tab === "All"
      ? ordersData.length
      : ordersData.filter((o) => o.status === tab).length;

  return (
    <div className="flex flex-wrap gap-2">
      {tabs.map((tab) => {
        const count = getCount(tab);
        const isActive = activeTab === tab;
        const cfg = statusConfig[tab] ?? {};

        return (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium border transition-all duration-150 ${
              isActive
                ? "bg-green-700 text-white border-green-700 shadow-sm"
                : "bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            }`}
          >
            {tab}
            <span
              className={`text-xs font-bold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1 ${
                isActive
                  ? "bg-white/20 text-white"
                  : (cfg.bg ?? "bg-gray-100") + " " + (cfg.color ?? "text-gray-500")
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default OrderTabs;