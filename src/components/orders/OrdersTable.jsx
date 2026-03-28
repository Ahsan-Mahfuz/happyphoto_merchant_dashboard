import { Eye } from "lucide-react";
import { Modal } from "antd";
import { useState } from "react";
import { toast } from "sonner";
import { statusConfig } from "../../Pages/orders/data/ordersData";

const StatusBadge = ({ status }) => {
  const cfg = statusConfig[status] ?? { color: "text-gray-600", bg: "bg-gray-100", border: "border-gray-200" };
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${cfg.bg} ${cfg.color} ${cfg.border}`}>
      {status}
    </span>
  );
};

const OrderDetailModal = ({ order, open, onClose }) => {
  if (!order) return null;
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={<span className="font-bold text-gray-800">Order #{order.id}</span>}
      centered
    >
      <div className="space-y-3 py-2">
        {[
          ["Customer",  order.customer],
          ["Items",     `${order.items} items`],
          ["Amount",    `$${order.amount.toFixed(2)}`],
          ["Status",    <StatusBadge key="s" status={order.status} />],
          ["Time",      order.time],
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between items-center border-b border-gray-50 pb-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">{label}</span>
            <span className="text-sm font-medium text-gray-800">{value}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
};

const OrdersTable = ({ orders }) => {
  const [selected, setSelected] = useState(null);

  const handleView = (order) => {
    setSelected(order);
    toast.info(`Viewing order #${order.id}`);
  };

  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 text-center text-sm text-gray-400">
        No orders found for this status.
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
              {["Order ID", "Customer", "Items", "Amount", "Status", "Time", "Action"].map((h) => (
                <th key={h} className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors">
                <td className="px-5 py-4 font-bold text-gray-800">#{order.id}</td>
                <td className="px-5 py-4 text-gray-700">{order.customer}</td>
                <td className="px-5 py-4 text-gray-500">{order.items} items</td>
                <td className="px-5 py-4 font-semibold text-gray-800">${order.amount.toFixed(2)}</td>
                <td className="px-5 py-4"><StatusBadge status={order.status} /></td>
                <td className="px-5 py-4 text-gray-400">{order.time}</td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => handleView(order)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-50 text-purple-600 hover:bg-purple-100 transition text-xs font-semibold border border-purple-100"
                  >
                    <Eye size={13} /> View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            <div className="flex justify-between items-start mb-2">
              <span className="font-bold text-gray-800 text-sm">#{order.id}</span>
              <StatusBadge status={order.status} />
            </div>
            <p className="text-sm text-gray-600 mb-1">{order.customer}</p>
            <div className="flex justify-between items-center text-xs text-gray-400">
              <span>{order.items} items · ${order.amount.toFixed(2)}</span>
              <span>{order.time}</span>
            </div>
            <button
              onClick={() => handleView(order)}
              className="mt-3 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl bg-purple-50 text-purple-600 text-xs font-semibold border border-purple-100"
            >
              <Eye size={13} /> View
            </button>
          </div>
        ))}
      </div>

      <OrderDetailModal order={selected} open={!!selected} onClose={() => setSelected(null)} />
    </>
  );
};

export default OrdersTable;