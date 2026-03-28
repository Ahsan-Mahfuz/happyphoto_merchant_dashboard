/* eslint-disable no-unused-vars */
import { Form, Input } from "antd";
import { Camera } from "lucide-react";

const StoreInfoSection = ({ form }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-5">
    <div>
      <h2 className="text-sm font-bold text-gray-800">Store Information</h2>
      <p className="text-xs text-gray-400 mt-0.5">Update your store&apos;s public profile details.</p>
    </div>

    {/* Logo uploader */}
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16 rounded-full border-2 border-dashed border-purple-300 bg-purple-50 flex items-center justify-center cursor-pointer hover:bg-purple-100 transition group">
        <Camera size={20} className="text-purple-400 group-hover:text-purple-600 transition" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-700">Change Logo</p>
        <p className="text-xs text-gray-400">Recommended size: 256×256px</p>
      </div>
    </div>

    {/* Fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Form.Item name="name" label={<span className="text-xs font-semibold text-gray-600">Store Name</span>} className="mb-0">
        <Input className="rounded-xl" placeholder="Store name" />
      </Form.Item>
      <Form.Item name="phone" label={<span className="text-xs font-semibold text-gray-600">Phone Number</span>} className="mb-0">
        <Input className="rounded-xl" placeholder="(555) 000-0000" />
      </Form.Item>
    </div>
    <Form.Item name="address" label={<span className="text-xs font-semibold text-gray-600">Store Address</span>} className="mb-0">
      <Input className="rounded-xl" placeholder="Full address" />
    </Form.Item>
    <Form.Item name="email" label={<span className="text-xs font-semibold text-gray-600">Support Email</span>} className="mb-0">
      <Input className="rounded-xl" placeholder="support@yourstore.com" />
    </Form.Item>
  </div>
);

export default StoreInfoSection;