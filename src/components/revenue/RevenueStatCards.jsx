import { DollarSign, TrendingUp } from "lucide-react";
import { toast } from "sonner";
import { revenueStats } from "../../Pages/revenue/data/revenueData";

const RevenueStatCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {/* Today */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-2">
        <DollarSign size={16} className="text-green-600" />
        <p className="text-xs text-gray-500 font-medium">
          Today&apos;s Revenue
        </p>
      </div>
      <p className="text-2xl font-bold text-gray-800">
        {revenueStats.todayRevenue.amount}
      </p>
      <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
        <TrendingUp size={12} /> {revenueStats.todayRevenue.change}
      </p>
    </div>

    {/* Weekly */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-2">
        <DollarSign size={16} className="text-blue-500" />
        <p className="text-xs text-gray-500 font-medium">Weekly Revenue</p>
      </div>
      <p className="text-2xl font-bold text-gray-800">
        {revenueStats.weeklyRevenue.amount}
      </p>
      <p className="text-xs text-green-600 font-semibold mt-1 flex items-center gap-1">
        <TrendingUp size={12} /> {revenueStats.weeklyRevenue.change}
      </p>
    </div>

    {/* Payout */}
    <div
      className="rounded-2xl p-5 flex flex-col justify-between"
      style={{ background: "linear-gradient(135deg,#6d28d9,#4c1d95)" }}
    >
      <div>
        <p className="text-xs text-purple-200 font-medium mb-2">
          Available for Payout
        </p>
        <p className="text-2xl font-bold text-white">
          {revenueStats.payout.amount}
        </p>
      </div>
      <button
        onClick={() => toast.success("Withdrawal initiated!")}
        className="mt-4 self-start flex items-center gap-2 px-4 py-2 bg-white text-purple-700 text-sm font-bold rounded-xl hover:bg-purple-50 transition shadow"
      >
        Withdraw Funds ↗
      </button>
    </div>
  </div>
);

export default RevenueStatCards;
