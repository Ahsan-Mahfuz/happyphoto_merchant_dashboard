import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSignup } from "./SignupContext";

const StepNav = ({
  onContinue,
  continueLabel = "Continue",
  loading = false,
  hideBack = false,
}) => {
  const { prevStep } = useSignup();

  return (
    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
      {!hideBack ? (
        <button
          type="button"
          onClick={prevStep}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 font-medium transition"
        >
          <ArrowLeft size={15} /> Back
        </button>
      ) : (
        <div />
      )}

      <button
        type="button"
        onClick={onContinue}
        disabled={loading}
        className="flex items-center gap-2 px-5 py-2.5 bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold rounded-xl transition-all shadow-sm disabled:opacity-70"
      >
        {loading ? "Please wait…" : continueLabel}
        {!loading && <ArrowRight size={15} />}
      </button>
    </div>
  );
};

export default StepNav;
