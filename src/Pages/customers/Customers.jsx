import { useState, useMemo } from "react";
import { Input } from "antd";
import { Search } from "lucide-react";
import { Toaster } from "sonner";
import { customersData } from "./data/customersData";
import CustomersTable from "../../components/customer/CustomersTable";
import CustomerProfileModal from "../../components/customer/CustomerProfileModal";

const Customers = () => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (!search.trim()) return customersData;
    const q = search.toLowerCase();
    return customersData.filter((c) => c.name.toLowerCase().includes(q));
  }, [search]);

  return (
    <div className="space-y-4 bg-gray-50 min-h-full">
      <Toaster position="top-right" richColors closeButton />
      <Input
        prefix={<Search size={14} className="text-gray-400" />}
        placeholder="Search customers..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-xs rounded-xl text-sm"
        allowClear
      />
      <CustomersTable customers={filtered} onView={setSelected} />
      <CustomerProfileModal
        customer={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
};

export default Customers;
