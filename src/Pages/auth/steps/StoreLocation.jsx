import { Form, Input, Select } from "antd";
import { MapPin } from "lucide-react";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";
import { toast } from "sonner";

const StoreLocation = () => {
  const [form] = Form.useForm();
  const { formData, updateFormData, nextStep } = useSignup();

  const handleContinue = () => {
    form.validateFields().then((values) => {
      updateFormData(values);
      nextStep();
    });
  };

  return (
    <div>
      <h2 className="text-base font-bold text-gray-800">Store Location</h2>
      <p className="text-xs text-gray-400 mt-1 mb-4">
        Where is your business located?
      </p>

      {/* Map placeholder */}
      <div className="w-full h-36 rounded-xl border border-gray-200 bg-gray-50 flex flex-col items-center justify-center gap-2 mb-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/60 to-blue-50/40" />
        <MapPin size={22} className="text-purple-500 relative z-10" />
        <p className="text-xs text-gray-400 relative z-10">
          Google Maps Integration Placeholder
        </p>
        <button
          type="button"
          onClick={() => toast.info("Map integration not wired in demo")}
          className="relative z-10 px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 transition shadow-sm"
        >
          Pin Location
        </button>
      </div>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{
          fullAddress: formData.fullAddress,
          city: formData.city,
          state: formData.state,
          zip: formData.zip,
          country: formData.country,
        }}
      >
        <Form.Item
          name="fullAddress"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Full Address
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input
            placeholder="Street address"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            name="city"
            label={
              <span className="text-xs font-semibold text-gray-600">City</span>
            }
            rules={[{ required: true, message: "Required" }]}
            className="mb-3"
          >
            <Input placeholder="City" className="rounded-xl h-9 text-sm" />
          </Form.Item>
          <Form.Item
            name="state"
            label={
              <span className="text-xs font-semibold text-gray-600">
                State/Province
              </span>
            }
            className="mb-3"
          >
            <Input placeholder="State" className="rounded-xl h-9 text-sm" />
          </Form.Item>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            name="zip"
            label={
              <span className="text-xs font-semibold text-gray-600">
                Zip/Postal Code
              </span>
            }
            className="mb-3"
          >
            <Input placeholder="Zip code" className="rounded-xl h-9 text-sm" />
          </Form.Item>
          <Form.Item
            name="country"
            label={
              <span className="text-xs font-semibold text-gray-600">
                Country
              </span>
            }
            className="mb-0"
          >
            <Select
              defaultValue="United States"
              className="h-9"
              options={[
                "United States",
                "Canada",
                "United Kingdom",
                "Australia",
                "Other",
              ].map((c) => ({ value: c, label: c }))}
            />
          </Form.Item>
        </div>
      </Form>

      <StepNav onContinue={handleContinue} />
    </div>
  );
};

export default StoreLocation;
