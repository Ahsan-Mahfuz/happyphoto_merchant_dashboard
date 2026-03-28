import { Form, Input } from "antd";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";

const Payment = () => {
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
      <h2 className="text-base font-bold text-gray-800">Payment Setup</h2>
      <p className="text-xs text-gray-400 mt-1 mb-5">
        How would you like to receive your payouts?
      </p>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{
          bankName: formData.bankName,
          accountHolder: formData.accountHolder,
          accountNumber: formData.accountNumber,
          routingNumber: formData.routingNumber,
          mobileBanking: formData.mobileBanking,
        }}
      >
        <Form.Item
          name="bankName"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Bank Name
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input
            placeholder="e.g. Chase Bank"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <Form.Item
          name="accountHolder"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Account Holder Name
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input placeholder="John Doe" className="rounded-xl h-9 text-sm" />
        </Form.Item>

        <Form.Item
          name="accountNumber"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Account Number / IBAN
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input
            placeholder="Enter account number"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <Form.Item
          name="routingNumber"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Routing Number / Sort Code
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input
            placeholder="Enter routing number"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <Form.Item
          name="mobileBanking"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Mobile Banking{" "}
              <span className="text-gray-300 font-normal">Optional</span>
            </span>
          }
        >
          <Input
            placeholder="e.g. Venmo, Zelle, CashApp ID"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>
      </Form>

      <StepNav onContinue={handleContinue} />
    </div>
  );
};

export default Payment;
