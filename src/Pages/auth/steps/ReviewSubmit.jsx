import { useState } from "react";
import { UserCircle, Building2, FileText, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";

const ReviewRow = ({ label, value }) => (
  <div className="flex justify-between items-start py-1.5 text-xs border-b border-gray-50 last:border-0">
    <span className="text-gray-400 w-24 flex-shrink-0">{label}:</span>
    <span className="text-gray-700 font-medium text-right flex-1">
      {value || "—"}
    </span>
  </div>
);

const ReviewSection = ({ icon: Icon, title, onEdit, children }) => (
  <div className="border border-gray-100 rounded-xl overflow-hidden mb-3">
    <div className="flex items-center justify-between px-4 py-2.5 bg-gray-50 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-gray-500" />
        <span className="text-xs font-bold text-gray-700">{title}</span>
      </div>
      <button
        onClick={onEdit}
        className="text-xs font-semibold text-green-700 hover:underline"
      >
        Edit
      </button>
    </div>
    <div className="px-4 py-3">{children}</div>
  </div>
);

const ReviewSubmit = () => {
  const { formData, goToStep, nextStep } = useSignup();
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Application submitted!");
      nextStep(); // → Approved screen
    }, 1200);
  };

  return (
    <div>
      <h2 className="text-base font-bold text-gray-800">Review & Submit</h2>
      <p className="text-xs text-gray-400 mt-1 mb-4">
        Please review your information before submitting for approval.
      </p>

      <ReviewSection
        icon={UserCircle}
        title="Account Details"
        onEdit={() => goToStep(0)}
      >
        <ReviewRow label="Name" value={formData.fullName} />
        <ReviewRow label="Email" value={formData.email} />
        <ReviewRow label="Phone" value={formData.phone} />
      </ReviewSection>

      <ReviewSection
        icon={Building2}
        title="Business Info"
        onEdit={() => goToStep(1)}
      >
        <ReviewRow label="Store Name" value={formData.storeName} />
        <ReviewRow label="Type" value={formData.businessType} />
        <ReviewRow
          label="Address"
          value={[formData.fullAddress, formData.city, formData.state]
            .filter(Boolean)
            .join(", ")}
        />
      </ReviewSection>

      <ReviewSection
        icon={FileText}
        title="Documents"
        onEdit={() => goToStep(4)}
      >
        <div className="space-y-1">
          {[
            { label: "Business License", file: formData.businessLicense },
            { label: "Owner ID", file: formData.ownerId },
          ].map(({ label, file }) => (
            <div key={label} className="flex items-center gap-2 text-xs">
              <CheckCircle2
                size={13}
                className={file ? "text-green-600" : "text-gray-300"}
              />
              <span className={file ? "text-gray-700" : "text-gray-400"}>
                {file ? `${label} uploaded` : `${label} not uploaded`}
              </span>
            </div>
          ))}
        </div>
      </ReviewSection>

      {/* Terms notice */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-4 py-3 mb-2">
        <p className="text-[11px] text-yellow-700 leading-relaxed">
          By submitting this application, you agree to our{" "}
          <span className="font-semibold underline cursor-pointer">
            Merchant Terms of Service
          </span>{" "}
          and{" "}
          <span className="font-semibold underline cursor-pointer">
            Privacy Policy
          </span>
          . Your application will be reviewed by our admin team within 24–48
          hours.
        </p>
      </div>

      <StepNav
        onContinue={handleSubmit}
        continueLabel="Submit Application"
        loading={loading}
      />
    </div>
  );
};

export default ReviewSubmit;
