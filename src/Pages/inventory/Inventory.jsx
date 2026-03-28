import { useState, useMemo } from "react";
import { Input, Select } from "antd";
import { Search } from "lucide-react";
import { Toaster } from "sonner";
import { inventoryData, statusFilters } from "./data/inventoryData";
import InventoryStatCards from "../../components/inventory/InventoryStatCards";
import InventoryTable from "../../components/inventory/InventoryTable";
import UpdateStockModal from "../../components/inventory/UpdateStockModal";

// Derive status from stock count
const deriveStatus = (stock) => {
  if (stock === 0) return "Out of Stock";
  if (stock <= 10) return "Low Stock";
  return "In Stock";
};

const Inventory = () => {
  const [items, setItems]             = useState(inventoryData);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [updateTarget, setUpdateTarget] = useState(null);

  const stats = useMemo(() => ({
    total:      items.length,
    inStock:    items.filter((i) => i.status === "In Stock").length,
    lowStock:   items.filter((i) => i.status === "Low Stock").length,
    outOfStock: items.filter((i) => i.status === "Out of Stock").length,
  }), [items]);

  const filtered = useMemo(() => {
    let list = items;
    if (statusFilter !== "All Statuses") list = list.filter((i) => i.status === statusFilter);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((i) => i.name.toLowerCase().includes(q));
    }
    return list;
  }, [items, searchQuery, statusFilter]);

  const handleUpdateStock = (id, newStock) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              stock: newStock,
              status: deriveStatus(newStock),
              lastUpdated: "Just now",
            }
          : item
      )
    );
  };

  return (
    <div className="space-y-4  min-h-full">
      <Toaster position="top-right" richColors closeButton />

      {/* Stat Cards */}
      <InventoryStatCards stats={stats} />

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <Input
          prefix={<Search size={14} className="text-gray-400" />}
          placeholder="Search inventory..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="sm:max-w-xs rounded-xl text-sm"
          allowClear
        />
        <Select
          value={statusFilter}
          onChange={setStatusFilter}
          className="sm:w-44"
          options={statusFilters.map((s) => ({ value: s, label: s }))}
        />
      </div>

      {/* Table */}
      <InventoryTable items={filtered} onUpdate={setUpdateTarget} />

      {/* Update Stock Modal */}
      <UpdateStockModal
        open={!!updateTarget}
        onClose={() => setUpdateTarget(null)}
        onSave={handleUpdateStock}
        item={updateTarget}
      />
    </div>
  );
};

export default Inventory;