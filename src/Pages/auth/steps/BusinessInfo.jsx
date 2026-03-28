import { Form, Input, Select } from "antd";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";

const businessTypes = [
  "Grocery",
  "Bakery",
  "Restaurant",
  "Butcher",
  "Dairy",
  "Produce",
  "Beverages",
  "Health & Wellness",
  "Other",
];

const BusinessInfo = () => {
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
      <h2 className="text-base font-bold text-gray-800">
        Business Information
      </h2>
      <p className="text-xs text-gray-400 mt-1 mb-5">
        Tell us about your store or business entity.
      </p>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{
          storeName: formData.storeName,
          businessType: formData.businessType,
          registrationNumber: formData.registrationNumber,
          taxNumber: formData.taxNumber,
        }}
      >
        <Form.Item
          name="storeName"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Store Name
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input
            placeholder="e.g. Fresh Foods Market"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <Form.Item
          name="businessType"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Business Type
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Select
            placeholder="Select a category..."
            options={businessTypes.map((t) => ({ value: t, label: t }))}
            className="h-9"
          />
        </Form.Item>

        <Form.Item
          name="registrationNumber"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Business Registration Number{" "}
              <span className="text-gray-300 font-normal">(Optional)</span>
            </span>
          }
          className="mb-3"
        >
          <Input
            placeholder="Enter registration number..."
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <Form.Item
          name="taxNumber"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Tax/VAT Number{" "}
              <span className="text-gray-300 font-normal">Optional</span>
            </span>
          }
        >
          <Input
            placeholder="Enter Tax ID"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>
      </Form>

      <StepNav onContinue={handleContinue} />
    </div>
  );
};

export default BusinessInfo;
