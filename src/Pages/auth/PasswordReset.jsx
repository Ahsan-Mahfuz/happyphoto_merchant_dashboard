import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import AuthLayout from "../../components/authLayout/AuthLayout";

// This page is shown after code verification — confirms reset before setting new password
const PasswordReset = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/set-new-password");
    }, 600);
  };

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <AuthLayout>
        <div className="text-center space-y-3 py-2">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto">
            <svg
              viewBox="0 0 24 24"
              className="w-7 h-7 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h2 className="text-base font-bold text-gray-800">Password Reset</h2>
          <p className="text-xs text-gray-400 leading-relaxed">
            Your password has been successfully reset, click confirm to set a
            new password
          </p>

          <button
            type="button"
            onClick={handleConfirm}
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all disabled:opacity-70 mt-2"
          >
            {loading ? "Loading…" : "Confirm"}
          </button>
        </div>
      </AuthLayout>
    </>
  );
};

export default PasswordReset;
