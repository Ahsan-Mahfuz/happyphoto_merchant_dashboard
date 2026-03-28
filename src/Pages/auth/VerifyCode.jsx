import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Toaster, toast } from "sonner";
import AuthLayout from "../../components/authLayout/AuthLayout";

const CODE_LENGTH = 5;

const VerifyCode = () => {
  const [digits, setDigits] = useState(Array(CODE_LENGTH).fill(""));
  const [loading, setLoading] = useState(false);
  const inputs = useRef([]);
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email ?? "your email";

  const handleChange = (index, value) => {
    const cleaned = value.replace(/\D/g, "").slice(-1); // digits only, 1 char
    const updated = [...digits];
    updated[index] = cleaned;
    setDigits(updated);
    // Auto-advance
    if (cleaned && index < CODE_LENGTH - 1) inputs.current[index + 1]?.focus();
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !digits[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, CODE_LENGTH);
    const updated = Array(CODE_LENGTH).fill("");
    [...pasted].forEach((ch, i) => {
      updated[i] = ch;
    });
    setDigits(updated);
    inputs.current[Math.min(pasted.length, CODE_LENGTH - 1)]?.focus();
  };

  const handleVerify = () => {
    const code = digits.join("");
    if (code.length < CODE_LENGTH) {
      toast.error("Please enter the full 5-digit code.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (code === "12345") {
        toast.success("Code verified!");
        setTimeout(() => navigate("/reset-password"), 600);
      } else {
        toast.error("Invalid code. Try 12345 for demo.");
      }
    }, 900);
  };

  const handleResend = () => {
    setDigits(Array(CODE_LENGTH).fill(""));
    inputs.current[0]?.focus();
    toast.success(`Code resent to ${email}`);
  };

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <AuthLayout>
        <h2 className="text-base font-bold text-gray-800 text-center">
          Check Your Email
        </h2>
        <p className="text-xs text-gray-400 text-center mt-1 mb-1">
          We sent a reset link to{" "}
          <strong className="text-gray-600">{email}</strong>
        </p>
        <p className="text-xs text-gray-400 text-center mb-6">
          Enter the 5 digit code that mentioned in the email.
        </p>

        {/* OTP inputs */}
        <div className="flex justify-center gap-2.5 mb-6" onPaste={handlePaste}>
          {digits.map((d, i) => (
            <input
              key={i}
              ref={(el) => (inputs.current[i] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={d}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className={`w-10 h-11 text-center text-base font-bold border rounded-xl outline-none transition-all
                ${d ? "border-green-500 bg-green-50 text-green-700" : "border-gray-200 bg-gray-50 text-gray-800"}
                focus:border-green-500 focus:ring-2 focus:ring-green-200`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={handleVerify}
          disabled={loading}
          className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all disabled:opacity-70 mb-3"
        >
          {loading ? "Verifying…" : "Verify Code"}
        </button>

        <p className="text-xs text-center text-gray-400">
          You have not received the email?{" "}
          <button
            onClick={handleResend}
            className="text-green-700 font-semibold hover:underline"
          >
            Resend
          </button>
        </p>
      </AuthLayout>
    </>
  );
};

export default VerifyCode;
