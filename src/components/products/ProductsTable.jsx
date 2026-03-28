import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Modal } from "antd";
import { toast } from "sonner";
import { statusConfig } from "../../Pages/products/data/productsData";

const StatusBadge = ({ status }) => {
  const cfg = statusConfig[status] ?? { color: "text-gray-500", bg: "bg-gray-100", border: "border-gray-200" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
      {status}
    </span>
  );
};

const ProductsTable = ({ products, onEdit, onDelete }) => {
  const [deleteTarget, setDeleteTarget] = useState(null);

  const confirmDelete = () => {
    onDelete(deleteTarget.id);
    toast.success(`"${deleteTarget.name}" removed`);
    setDeleteTarget(null);
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 text-center text-sm text-gray-400">
        No products found.
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
              {["Image", "Product Name", "Category", "Price", "Stock", "Status", "Actions"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors">
                <td className="px-5 py-3.5">
                  <div className="w-9 h-9 rounded-xl bg-purple-50 flex items-center justify-center text-lg">
                    {product.emoji}
                  </div>
                </td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">{product.name}</td>
                <td className="px-5 py-3.5 text-gray-500">{product.category}</td>
                <td className="px-5 py-3.5 font-semibold text-gray-800">${product.price.toFixed(2)}</td>
                <td className="px-5 py-3.5 text-gray-700">{product.stock}</td>
                <td className="px-5 py-3.5"><StatusBadge status={product.status} /></td>
                <td className="px-5 py-3.5">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => { onEdit(product); toast.info(`Editing "${product.name}"`); }}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition"
                    >
                      <Pencil size={15} />
                    </button>
                    <button
                      onClick={() => setDeleteTarget(product)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition"
                    >
                      <Trash2 size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center text-xl flex-shrink-0">
              {product.emoji}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800 truncate">{product.name}</p>
              <p className="text-xs text-gray-400">{product.category} · ${product.price.toFixed(2)} · Stock: {product.stock}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <StatusBadge status={product.status} />
              <div className="flex gap-1">
                <button onClick={() => { onEdit(product); toast.info(`Editing "${product.name}"`); }}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-green-600 hover:bg-green-50 transition">
                  <Pencil size={14} />
                </button>
                <button onClick={() => setDeleteTarget(product)}
                  className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition">
                  <Trash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Delete confirmation modal */}
      <Modal
        open={!!deleteTarget}
        onCancel={() => setDeleteTarget(null)}
        onOk={confirmDelete}
        okText="Delete"
        okButtonProps={{ danger: true }}
        title="Delete Product"
        centered
      >
        <p className="text-sm text-gray-600 py-2">
          Are you sure you want to delete <strong>{deleteTarget?.name}</strong>? This action cannot be undone.
        </p>
      </Modal>
    </>
  );
};

export default ProductsTable;