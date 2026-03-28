import { useState } from "react";
import { toast } from "sonner";
import { quickActions } from "../../Pages/dashboardHome/data/dashboardData";

const QuickActions = () => {
  const [loading, setLoading] = useState(null);

  const handleAction = (action) => {
    setLoading(action.id);
    setTimeout(() => {
      setLoading(null);
      toast.success(`${action.label} opened!`);
    }, 700);
  };

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
      <h2 className="text-sm font-bold text-gray-800 mb-4">Quick Actions</h2>

      <div className="flex flex-col gap-2">
        {quickActions.map((action) =>
          action.primary ? (
            <button
              key={action.id}
              onClick={() => handleAction(action)}
              disabled={loading === action.id}
              className="w-full py-2.5 px-4 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all duration-150 disabled:opacity-70"
            >
              {loading === action.id ? "Opening…" : action.label}
            </button>
          ) : (
            <button
              key={action.id}
              onClick={() => handleAction(action)}
              disabled={loading === action.id}
              className="w-full py-2.5 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 active:scale-[0.98] text-gray-700 text-sm font-medium transition-all duration-150 disabled:opacity-70"
            >
              {loading === action.id ? "Opening…" : action.label}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default QuickActions;