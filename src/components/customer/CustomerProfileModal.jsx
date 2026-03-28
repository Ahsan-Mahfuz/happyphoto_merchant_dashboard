import { Modal } from "antd";
import { ShoppingBag, DollarSign, Clock } from "lucide-react";

const CustomerProfileModal = ({ customer, open, onClose }) => {
  if (!customer) return null;
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={<span className="font-bold text-gray-800">Customer Profile</span>}
      centered
    >
      <div className="py-3 space-y-4">
        {/* Avatar + name */}
        <div className="flex items-center gap-4">
          <div
            className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold ${customer.color}`}
          >
            {customer.initials}
          </div>
          <div>
            <p className="text-base font-bold text-gray-800">{customer.name}</p>
            <p className="text-xs text-gray-400">
              Customer ID: #C00{customer.id}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              icon: ShoppingBag,
              label: "Orders",
              value: customer.orders,
              color: "text-purple-600",
              bg: "bg-purple-50",
            },
            {
              icon: DollarSign,
              label: "Spending",
              value: `$${customer.spending.toFixed(2)}`,
              color: "text-green-600",
              bg: "bg-green-50",
            },
            {
              icon: Clock,
              label: "Last Order",
              value: customer.lastOrder,
              color: "text-blue-600",
              bg: "bg-blue-50",
            },
          ].map(({ icon: Icon, label, value, color, bg }) => (
            <div key={label} className={`rounded-xl p-3 text-center ${bg}`}>
              <Icon size={18} className={`mx-auto mb-1 ${color}`} />
              <p className="text-xs text-gray-400 font-medium">{label}</p>
              <p className={`text-sm font-bold ${color}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default CustomerProfileModal;
