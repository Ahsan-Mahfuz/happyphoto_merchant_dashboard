import { useState, useMemo } from "react";
import { Input } from "antd";
import { SlidersHorizontal, Search } from "lucide-react";
import { Toaster, toast } from "sonner";
import { ordersData } from "./data/ordersData";
import OrderTabs from "../../components/orders/OrderTabs";
import OrdersTable from "../../components/orders/OrdersTable";

const Orders = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = useMemo(() => {
    let list =
      activeTab === "All"
        ? ordersData
        : ordersData.filter((o) => o.status === activeTab);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (o) =>
          o.id.toLowerCase().includes(q) ||
          o.customer.toLowerCase().includes(q),
      );
    }
    return list;
  }, [activeTab, searchQuery]);

  return (
    <div className="space-y-4min-h-full">
      <Toaster position="top-right" richColors closeButton />

      {/* Filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <OrderTabs activeTab={activeTab} onTabChange={setActiveTab} />

        <div className="flex items-center gap-2 flex-shrink-0 my-4 ">
          <Input
            prefix={<Search size={14} className="text-gray-400" />}
            placeholder="Search orders..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-64 rounded-xl text-sm"
            allowClear
          />
        </div>
      </div>

      {/* Table */}
      <OrdersTable orders={filtered} />
    </div>
  );
};

export default Orders;
