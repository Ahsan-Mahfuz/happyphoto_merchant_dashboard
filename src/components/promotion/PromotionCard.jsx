import { Pencil, Trash2, Tag } from "lucide-react";
import { Modal } from "antd";
import { useState } from "react";
import { toast } from "sonner";

const PromotionCard = ({ promo, onEdit, onDelete }) => {
  const [confirmOpen, setConfirmOpen] = useState(false);
  const isActive = promo.status === "Active";
  const isExpired = promo.status === "Expired";

  return (
    <>
      <div
        className={`relative bg-white rounded-2xl border p-5 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow ${isActive ? "border-purple-200" : "border-gray-200"}`}
      >
        {/* Status badge */}
        {isActive && (
          <span className="absolute top-3 right-3 text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-600 text-white">
            Active
          </span>
        )}

        {/* Icon + code + discount */}
        <div className="flex items-center gap-3 pr-14">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
            <Tag size={18} className="text-purple-600" />
          </div>
          <div>
            <p className="text-base font-bold text-gray-800">{promo.code}</p>
            <p
              className={`text-sm font-semibold ${isActive ? "text-purple-600" : "text-gray-400"}`}
            >
              {promo.discount}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="text-sm space-y-1 border-t border-gray-50 pt-3">
          <div className="flex justify-between text-gray-500">
            <span>Min. Order:</span>
            <span className="font-semibold text-gray-700">
              ${promo.minOrder.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between text-gray-500">
            <span>Expires:</span>
            <span
              className={`font-semibold ${isExpired ? "text-red-500" : "text-gray-700"}`}
            >
              {isExpired ? "Expired" : promo.expires}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-1">
          <button
            onClick={() => onEdit(promo)}
            className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-green-700 transition"
          >
            <Pencil size={13} /> Edit
          </button>
          <button
            onClick={() => setConfirmOpen(true)}
            className="flex items-center gap-1.5 text-sm font-medium text-red-500 hover:text-red-700 transition"
          >
            <Trash2 size={13} /> Delete
          </button>
        </div>
      </div>

      <Modal
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onOk={() => {
          onDelete(promo.id);
          toast.success(`Coupon "${promo.code}" deleted`);
          setConfirmOpen(false);
        }}
        okText="Delete"
        okButtonProps={{ danger: true }}
        title="Delete Coupon"
        centered
      >
        <p className="text-sm text-gray-600 py-2">
          Are you sure you want to delete <strong>{promo.code}</strong>?
        </p>
      </Modal>
    </>
  );
};

export default PromotionCard;
