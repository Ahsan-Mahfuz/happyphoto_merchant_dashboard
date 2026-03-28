import { Form, Input, Slider } from "antd";
import { ImagePlus, Upload } from "lucide-react";
import { useSignup } from "../../../components/auth/SignupContext";
import StepNav from "../../../components/auth/StepNav";

const prepMarks = { 5: "5m", 15: "15m", 30: "30m", 45: "45m", 60: "60m" };

const UploadBox = ({ label, sub, icon: Icon, small }) => (
  <div className={`flex flex-col items-center justify-center gap-1.5 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition ${small ? "p-3" : "p-4"}`}>
    <Icon size={small ? 16 : 20} className="text-gray-300" />
    <span className="text-[11px] text-gray-400 font-medium">{label}</span>
    {sub && <span className="text-[10px] text-gray-300">{sub}</span>}
  </div>
);

const StoreSetup = () => {
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
      <h2 className="text-base font-bold text-gray-800">Store Details</h2>
      <p className="text-xs text-gray-400 mt-1 mb-5">Configure how your store appears to customers.</p>

      <Form form={form} layout="vertical" requiredMark={false}
        initialValues={{ storeDescription: formData.storeDescription,
          openingTime: formData.openingTime, closingTime: formData.closingTime, prepRange: [10, 20] }}>

        <Form.Item name="storeDescription"
          label={<span className="text-xs font-semibold text-gray-600">Store Description</span>}
          className="mb-3">
          <Input.TextArea rows={3} placeholder="Briefly describe what your store offers..."
            className="rounded-xl text-sm resize-none" />
        </Form.Item>

        <div className="grid grid-cols-2 gap-3 mb-3">
          <Form.Item name="openingTime"
            label={<span className="text-xs font-semibold text-gray-600">Opening Time</span>} className="mb-0">
            <Input type="time" defaultValue="08:00" className="rounded-xl h-9 text-sm" />
          </Form.Item>
          <Form.Item name="closingTime"
            label={<span className="text-xs font-semibold text-gray-600">Closing Time</span>} className="mb-0">
            <Input type="time" defaultValue="22:00" className="rounded-xl h-9 text-sm" />
          </Form.Item>
        </div>

        {/* Prep time slider */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-600 mb-1">Average Prep Time</p>
          <Form.Item name="prepRange" className="mb-0">
            <Slider range min={5} max={60} step={5} marks={prepMarks}
              trackStyle={[{ backgroundColor: "#16a34a" }]}
              handleStyle={[{ borderColor: "#16a34a" }, { borderColor: "#16a34a" }]} />
          </Form.Item>
        </div>

        {/* Store Branding */}
        <div className="mb-1">
          <p className="text-xs font-semibold text-gray-600 mb-2">Store Branding</p>
          <div className="grid grid-cols-4 gap-2">
            <UploadBox label="Logo" icon={Upload} small />
            <div className="col-span-3">
              <UploadBox label="Cover Banner" sub="Drag & drop or click" icon={ImagePlus} />
            </div>
          </div>
        </div>
      </Form>

      <StepNav onContinue={handleContinue} />
    </div>
  );
};

export default StoreSetup;