import { useState } from "react";
import { Form, Input, Checkbox } from "antd";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import AuthLayout from "../../components/authLayout/AuthLayout";

const Login = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      // Simulate auth
      setTimeout(() => {
        setLoading(false);
        if (
          values.email === "admin@freshfarms.co" &&
          values.password === "password"
        ) {
          toast.success("Welcome back!");
          setTimeout(() => navigate("/"), 600);
        } else {
          toast.error("Invalid email or password.");
        }
      }, 900);
    });
  };

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <AuthLayout>
        <h2 className="text-base font-bold text-gray-800 text-center">
          Sign In to Account
        </h2>
        <p className="text-xs text-gray-400 text-center mt-1 mb-5">
          Please enter your email and password to continue
        </p>

        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name="email"
            label={
              <span className="text-xs font-semibold text-gray-600">
                Email address
              </span>
            }
            rules={[
              {
                required: true,
                type: "email",
                message: "Valid email required",
              },
            ]}
            className="mb-3"
          >
            <Input
              placeholder="esteban_schiller@gmail.com"
              className="rounded-xl h-9 text-sm"
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={
              <span className="text-xs font-semibold text-gray-600">
                Password
              </span>
            }
            rules={[{ required: true, message: "Password required" }]}
            className="mb-2"
          >
            <Input.Password
              placeholder="••••••••"
              className="rounded-xl h-9 text-sm"
            />
          </Form.Item>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between mb-5">
            <Form.Item name="remember" valuePropName="checked" className="mb-0">
              <Checkbox className="text-xs text-gray-500">
                Remember Password
              </Checkbox>
            </Form.Item>
            <button
              type="button"
              onClick={() => navigate("/forget-password")}
              className="text-xs text-green-700 font-semibold hover:underline"
            >
              Forgot Password?
            </button>
          </div>

          {/* Sign In */}
          <button
            type="button"
            onClick={handleSignIn}
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all disabled:opacity-70 mb-2.5"
          >
            {loading ? "Signing in…" : "Sign In"}
          </button>

          {/* Sign Up */}
          <button
            type="button"
            onClick={() => navigate("/sign-up")}
            className="w-full py-2.5 rounded-xl border border-gray-300 hover:bg-gray-50 active:scale-[0.98] text-gray-700 text-sm font-semibold transition-all"
          >
            Sign Up
          </button>
        </Form>
      </AuthLayout>
    </>
  );
};

export default Login;
