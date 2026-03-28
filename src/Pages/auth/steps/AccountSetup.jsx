import { Form, Input } from "antd";
import { toast } from "sonner";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";

const AccountSetup = () => {
  const [form] = Form.useForm();
  const { formData, updateFormData, nextStep } = useSignup();

  const handleContinue = () => {
    form.validateFields().then((values) => {
      if (values.password !== values.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      updateFormData(values);
      nextStep();
    });
  };

  return (
    <div>
      <h2 className="text-base font-bold text-gray-800">Create your account</h2>
      <p className="text-xs text-gray-400 mt-1 mb-5">
        Let&apos;s start with your personal login details.
      </p>

      <Form
        form={form}
        layout="vertical"
        requiredMark={false}
        initialValues={{
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        }}
      >
        <Form.Item
          name="fullName"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Full Name
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input placeholder="John Doe" className="rounded-xl h-9 text-sm" />
        </Form.Item>

        <Form.Item
          name="email"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Email Address
            </span>
          }
          rules={[
            { required: true, type: "email", message: "Valid email required" },
          ]}
          className="mb-3"
        >
          <Input
            placeholder="john@example.com"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <Form.Item
          name="phone"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Phone Number
            </span>
          }
          rules={[{ required: true, message: "Required" }]}
          className="mb-3"
        >
          <Input
            placeholder="+1 (555) 000-0000"
            className="rounded-xl h-9 text-sm"
          />
        </Form.Item>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Form.Item
            name="password"
            label={
              <span className="text-xs font-semibold text-gray-600">
                Password
              </span>
            }
            rules={[{ required: true, min: 8, message: "Min. 8 characters" }]}
            className="mb-0"
          >
            <Input.Password
              placeholder="••••••••"
              className="rounded-xl h-9 text-sm"
            />
          </Form.Item>
          <Form.Item
            name="confirmPassword"
            label={
              <span className="text-xs font-semibold text-gray-600">
                Confirm Password
              </span>
            }
            rules={[{ required: true, message: "Required" }]}
            className="mb-0"
          >
            <Input.Password
              placeholder="••••••••"
              className="rounded-xl h-9 text-sm"
            />
          </Form.Item>
        </div>
      </Form>

      <StepNav onContinue={handleContinue} hideBack />
    </div>
  );
};

export default AccountSetup;
