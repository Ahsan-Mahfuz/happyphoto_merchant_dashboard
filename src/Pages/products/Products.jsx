import { useState, useMemo } from "react";
import { Input } from "antd";
import { Plus, Search } from "lucide-react";
import { Toaster } from "sonner";
import { productsData } from "./data/productsData";
import ProductsTable from "../../components/products/ProductsTable";
import AddEditProductModal from "../../components/products/AddEditProductModal";

const Products = () => {
  const [products, setProducts]       = useState(productsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [modalOpen, setModalOpen]     = useState(false);
  const [editProduct, setEditProduct] = useState(null);

  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const q = searchQuery.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [products, searchQuery]);

  const handleEdit = (product) => {
    setEditProduct(product);
    setModalOpen(true);
  };

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handleSave = (product) => {
    setProducts((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      return exists
        ? prev.map((p) => (p.id === product.id ? product : p))
        : [...prev, product];
    });
    setEditProduct(null);
  };

  return (
    <div className="space-y-4 min-h-full">
      <Toaster position="top-right" richColors closeButton />

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3">
        <Input
          prefix={<Search size={14} className="text-gray-400" />}
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="max-w-xs rounded-xl text-sm"
          allowClear
        />
        <button
          onClick={() => { setEditProduct(null); setModalOpen(true); }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-700 hover:bg-green-800 text-white text-sm font-semibold transition shadow-sm"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Product</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {/* Table */}
      <ProductsTable
        products={filtered}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Add / Edit Modal */}
      <AddEditProductModal
        open={modalOpen}
        onClose={() => { setModalOpen(false); setEditProduct(null); }}
        onSave={handleSave}
        editProduct={editProduct}
      />
    </div>
  );
};

export default Products;