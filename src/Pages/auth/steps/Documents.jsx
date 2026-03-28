import { useState } from "react";
import { Upload } from "antd";
import { CloudUpload, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";

const DocUploadZone = ({ title, subtitle, badge, onUpload, uploaded }) => (
  <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
    <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
      <div>
        <p className="text-xs font-bold text-gray-700">{title}</p>
        <p className="text-[11px] text-gray-400">{subtitle}</p>
      </div>
      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
        badge === "Required" ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-500"
      }`}>
        {badge}
      </span>
    </div>

    <Upload.Dragger
      showUploadList={false}
      beforeUpload={(file) => { onUpload(file); return false; }}
      className="!border-0 !bg-transparent"
    >
      <div className="flex flex-col items-center gap-1.5 py-5">
        {uploaded ? (
          <>
            <CheckCircle2 size={22} className="text-green-600" />
            <p className="text-xs text-green-600 font-semibold">{uploaded.name} uploaded</p>
          </>
        ) : (
          <>
            <CloudUpload size={22} className="text-gray-300" />
            <p className="text-xs text-gray-400">Click to upload or drag and drop</p>
            <p className="text-[10px] text-gray-300">PDF, JPG, PNG up to 10MB</p>
          </>
        )}
      </div>
    </Upload.Dragger>
  </div>
);

const Documents = () => {
  const { updateFormData, nextStep } = useSignup();
  const [license, setLicense]   = useState(null);
  const [ownerId, setOwnerId]   = useState(null);
  const [storefront, setStorefront] = useState([]);

  const handleContinue = () => {
    if (!license || !ownerId) {
      toast.error("Please upload both required documents.");
      return;
    }
    updateFormData({ businessLicense: license, ownerId, storefrontImages: storefront });
    toast.success("Documents saved!");
    nextStep();
  };

  return (
    <div>
      <h2 className="text-base font-bold text-gray-800">Document Verification</h2>
      <p className="text-xs text-gray-400 mt-1 mb-5">Upload required documents to verify your business authenticity.</p>

      <DocUploadZone
        title="Business License / Trade License"
        subtitle="Required for all registered businesses"
        badge="Required"
        onUpload={setLicense}
        uploaded={license}
      />

      <DocUploadZone
        title="Owner ID (National ID / Passport)"
        subtitle="Government issued photo ID"
        badge="Required"
        onUpload={setOwnerId}
        uploaded={ownerId}
      />

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100 bg-gray-50">
          <div>
            <p className="text-xs font-bold text-gray-700">Storefront Images</p>
            <p className="text-[11px] text-gray-400">Photos of your physical store</p>
          </div>
          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">Optional</span>
        </div>
        <Upload.Dragger
          multiple
          showUploadList={false}
          beforeUpload={(file) => { setStorefront((p) => [...p, file]); return false; }}
          className="!border-0 !bg-transparent"
        >
          <div className="flex flex-col items-center gap-1 py-4">
            {storefront.length > 0 ? (
              <p className="text-xs text-green-600 font-semibold">{storefront.length} image(s) selected</p>
            ) : (
              <p className="text-xs text-gray-400">Upload Images</p>
            )}
          </div>
        </Upload.Dragger>
      </div>

      <StepNav onContinue={handleContinue} />
    </div>
  );
};

export default Documents;