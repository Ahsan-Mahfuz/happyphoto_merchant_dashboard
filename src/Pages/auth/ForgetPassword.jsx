import { useState } from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import AuthLayout from "../../components/authLayout/AuthLayout";

const ForgetPassword = () => {
  const [form]    = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate  = useNavigate();

  const handleSendCode = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success(`Code sent to ${values.email}`);
        // Pass email through location state
        setTimeout(() => navigate("/verify-code", { state: { email: values.email } }), 700);
      }, 900);
    });
  };

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <AuthLayout>
        <h2 className="text-base font-bold text-gray-800 text-center">Enter Email</h2>
        <p className="text-xs text-gray-400 text-center mt-1 mb-5">
          Please enter your email
        </p>

        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name="email"
            label={<span className="text-xs font-semibold text-gray-600">Email address</span>}
            rules={[{ required: true, type: "email", message: "Valid email required" }]}
            className="mb-5"
          >
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="rounded-xl h-9 text-sm"
            />
          </Form.Item>

          <button
            type="button"
            onClick={handleSendCode}
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all disabled:opacity-70"
          >
            {loading ? "Sending…" : "Send Code"}
          </button>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="w-full mt-2.5 py-2 text-xs text-gray-400 hover:text-gray-600 transition"
          >
            ← Back to Sign In
          </button>
        </Form>
      </AuthLayout>
    </>
  );
};

export default ForgetPassword;