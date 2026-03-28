import { useState } from "react";
import { Plus } from "lucide-react";
import { Toaster } from "sonner";
import { promotionsData } from "./data/promotionsData";
import PromotionCard from "../../components/promotion/PromotionCard";
import CouponModal from "../../components/promotion/CouponModal";

const Promotions = () => {
  const [promos, setPromos] = useState(promotionsData);
  const [modalOpen, setModalOpen] = useState(false);
  const [editPromo, setEditPromo] = useState(null);

  const handleEdit = (promo) => {
    setEditPromo(promo);
    setModalOpen(true);
  };

  const handleDelete = (id) =>
    setPromos((prev) => prev.filter((p) => p.id !== id));

  const handleSave = (promo) => {
    setPromos((prev) => {
      const exists = prev.find((p) => p.id === promo.id);
      return exists
        ? prev.map((p) => (p.id === promo.id ? promo : p))
        : [...prev, promo];
    });
    setEditPromo(null);
  };

  const activeCount = promos.filter((p) => p.status === "Active").length;

  return (
    <div className=" space-y-4 min-h-full">
      <Toaster position="top-right" richColors closeButton />

      <div className="flex items-center justify-between">
        <h2 className="text-sm font-bold text-gray-800">
          Active Promotions{" "}
          <span className="text-gray-400 font-normal">({activeCount})</span>
        </h2>
        <button
          onClick={() => {
            setEditPromo(null);
            setModalOpen(true);
          }}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-700 hover:bg-green-800 text-white text-sm font-semibold transition shadow-sm"
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Create Coupon</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      {promos.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 py-16 text-center text-sm text-gray-400">
          No promotions yet. Create your first coupon!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {promos.map((p) => (
            <PromotionCard
              key={p.id}
              promo={p}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      <CouponModal
        open={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditPromo(null);
        }}
        onSave={handleSave}
        editPromo={editPromo}
      />
    </div>
  );
};

export default Promotions;
