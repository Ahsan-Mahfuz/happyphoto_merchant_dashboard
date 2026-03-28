import { useNavigate } from "react-router-dom";
import { Toaster } from "sonner";


// Steps
import AccountSetup from "./steps/AccountSetup";
import BusinessInfo from "./steps/BusinessInfo";
import StoreLocation from "./steps/StoreLocation";
import StoreSetup from "./steps/StoreSetup";
import Documents from "./steps/Documents";
import Payment from "./steps/Payment";
import ReviewSubmit from "./steps/ReviewSubmit";
import AccountApproved from "./steps/AccountApproved";
import SetupSidebar from "../../components/auth/SetupSidebar";
import { SignupProvider, useSignup } from "../../components/auth/SignupContext";

const STEPS = [
  AccountSetup,
  BusinessInfo,
  StoreLocation,
  StoreSetup,
  Documents,
  Payment,
  ReviewSubmit,
  AccountApproved,
];

const SignupInner = () => {
  const { step } = useSignup();
  const navigate = useNavigate();
  const StepComponent = STEPS[step];
  const isApproved = step === 7;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top nav bar */}
      <header className="w-full bg-white border-b border-gray-100 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/logo.svg"
            alt="Logo"
            className="w-7 h-7 object-contain rounded-full"
          />
          <span className="text-sm font-bold text-gray-800">
            Merchant Panel
          </span>
        </div>
        {!isApproved && (
          <button
            onClick={() => navigate("/login")}
            className="text-xs text-gray-400 hover:text-gray-600 transition font-medium"
          >
            Cancel Setup
          </button>
        )}
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-auto">
        {/* Sidebar — hidden on approved screen & small screens */}
        {!isApproved && (
          <div className="hidden md:block w-52 flex-shrink-0 bg-white border-r border-gray-100 px-5 pt-8">
            <SetupSidebar />
          </div>
        )}

        {/* Step content area */}
        <main className="flex-1 flex items-center justify-center    px-4 py-10">
          <div
            className={`w-full bg-white rounded-2xl border  border-gray-100 shadow-sm p-6 sm:p-8 ${isApproved ? "max-w-sm" : "max-w-lg"}`}
          >
            <StepComponent />
          </div>
        </main>
      </div>
    </div>
  );
};

// Wrap with provider
const SignUp = () => (
  <SignupProvider>
    <Toaster position="top-center" richColors closeButton />
    <SignupInner />
  </SignupProvider>
);

export default SignUp;
