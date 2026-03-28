import { useState } from "react";
import { Form } from "antd";
import { Toaster, toast } from "sonner";
import {
  defaultStoreInfo,
  defaultBusinessHours,
  defaultDeliverySettings,
} from "./data/storeSettingsData";
import StoreInfoSection from "../../components/store/StoreInfoSection";
import BusinessHoursSection from "../../components/store/BusinessHoursSection";
import DeliverySettingsSection from "../../components/store/DeliverySettingsSection";

const StoreSettings = () => {
  const [form] = Form.useForm();
  const [hours, setHours] = useState(defaultBusinessHours);
  const [saving, setSaving] = useState(false);

  // Initialise form with defaults
  useState(() => {
    form.setFieldsValue({ ...defaultStoreInfo, ...defaultDeliverySettings });
  });

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        setSaving(true);
        // Simulate API call
        setTimeout(() => {
          setSaving(false);
          toast.success("Store settings saved successfully!");
          console.log("Saved:", { ...values, businessHours: hours });
        }, 800);
      })
      .catch(() => {
        toast.error("Please fill in all required fields.");
      });
  };

  return (
    <div className=" min-h-full">
      <Toaster position="top-right" richColors closeButton />

      <Form form={form} layout="vertical" className="space-y-4">
        <StoreInfoSection form={form} />
        <BusinessHoursSection hours={hours} onChange={setHours} />
        <DeliverySettingsSection />

        {/* Save button */}
        <div className="flex justify-end pb-6">
          <button
            type="button"
            onClick={handleSave}
            disabled={saving}
            className="px-6 py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-sm disabled:opacity-70"
          >
            {saving ? "Saving…" : "Save All Changes"}
          </button>
        </div>
      </Form>
    </div>
  );
};

export default StoreSettings;
