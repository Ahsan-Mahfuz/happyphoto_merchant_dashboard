import { Form, InputNumber } from "antd";

const DeliverySettingsSection = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-4">
    <div>
      <h2 className="text-sm font-bold text-gray-800">Delivery Settings</h2>
      <p className="text-xs text-gray-400 mt-0.5">
        Configure how orders are handled.
      </p>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Form.Item
        name="radius"
        label={
          <span className="text-xs font-semibold text-gray-600">
            Delivery Radius (miles)
          </span>
        }
        className="mb-0"
      >
        <InputNumber min={1} max={100} className="w-full rounded-xl" />
      </Form.Item>

      <Form.Item
        name="minOrder"
        label={
          <span className="text-xs font-semibold text-gray-600">
            Minimum Order ($)
          </span>
        }
        className="mb-0"
      >
        <InputNumber min={0} step={0.01} className="w-full rounded-xl" />
      </Form.Item>

      <Form.Item
        name="prepTime"
        label={
          <span className="text-xs font-semibold text-gray-600">
            Prep Time (mins)
          </span>
        }
        className="mb-0"
      >
        <InputNumber min={1} max={120} className="w-full rounded-xl" />
      </Form.Item>
    </div>
  </div>
);

export default DeliverySettingsSection;
