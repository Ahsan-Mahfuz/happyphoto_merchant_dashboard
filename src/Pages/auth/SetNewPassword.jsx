import { useState } from "react";
import { Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "sonner";
import AuthLayout from "../../components/authLayout/AuthLayout";

const SetNewPassword = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpdate = () => {
    form.validateFields().then((values) => {
      if (values.newPassword !== values.confirmPassword) {
        toast.error("Passwords do not match.");
        return;
      }
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        toast.success("Password updated successfully!");
        setTimeout(() => navigate("/login"), 800);
      }, 900);
    });
  };

  return (
    <>
      <Toaster position="top-center" richColors closeButton />
      <AuthLayout>
        <h2 className="text-base font-bold text-gray-800 text-center">
          Set a New Password
        </h2>
        <p className="text-xs text-gray-400 text-center mt-1 mb-5 leading-relaxed">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <Form form={form} layout="vertical" requiredMark={false}>
          <Form.Item
            name="newPassword"
            label={
              <span className="text-xs font-semibold text-gray-600">
                New Password
              </span>
            }
            rules={[
              { required: true, message: "Required" },
              { min: 8, message: "At least 8 characters" },
            ]}
            className="mb-3"
          >
            <Input.Password
              placeholder="KK@#$15856"
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
            dependencies={["newPassword"]}
            rules={[
              { required: true, message: "Required" },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("newPassword") === value)
                    return Promise.resolve();
                  return Promise.reject(new Error("Passwords do not match"));
                },
              }),
            ]}
            className="mb-5"
          >
            <Input.Password
              placeholder="KK@#$15856"
              className="rounded-xl h-9 text-sm"
            />
          </Form.Item>

          <button
            type="button"
            onClick={handleUpdate}
            disabled={loading}
            className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all disabled:opacity-70"
          >
            {loading ? "Updating…" : "Update Password"}
          </button>
        </Form>
      </AuthLayout>
    </>
  );
};

export default SetNewPassword;
