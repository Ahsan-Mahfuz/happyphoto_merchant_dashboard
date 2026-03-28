import { CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountApproved = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center  justify-center text-center py-6 gap-4">
      {/* Success icon */}
      <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle2 size={36} className="text-green-600" />
      </div>

      <div>
        <h2 className="text-base font-bold text-gray-800">Account Approved!</h2>
        <p className="text-xs text-gray-400 mt-1 leading-relaxed max-w-xs mx-auto">
          Your merchant account has been automatically approved. You now have full access to the
          Merchant Dashboard to manage your store, products, orders, and more.
        </p>
      </div>

      {/* Status pill */}
      <div className="w-full border border-gray-100 rounded-xl px-4 py-3 bg-gray-50">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-500 font-medium">Status:</span>
          <div className="flex items-center gap-1.5 text-green-600 font-bold">
            <CheckCircle2 size={13} />
            Approved & Active
          </div>
        </div>
        <p className="text-[10px] text-gray-400 mt-1 text-right">Full dashboard access granted</p>
      </div>

      {/* CTA */}
      <button
        onClick={() => navigate("/")}
        className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-sm"
      >
        Open Merchant Dashboard
      </button>

      <button
        onClick={() => navigate("/login")}
        className="text-xs text-gray-400 hover:text-gray-600 transition"
      >
        Back to Role Selection
      </button>
    </div>
  );
};

export default AccountApproved;