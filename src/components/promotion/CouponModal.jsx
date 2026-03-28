import { useEffect } from "react";
import { Modal, Form, Input, InputNumber, Select, DatePicker } from "antd";
import { toast } from "sonner";
import dayjs from "dayjs";

const CouponModal = ({ open, onClose, onSave, editPromo }) => {
  const [form] = Form.useForm();
  const isEdit = !!editPromo;

  useEffect(() => {
    if (open) {
      if (isEdit) {
        form.setFieldsValue({
          code: editPromo.code,
          discountType: editPromo.discountType,
          discountValue: editPromo.discountValue,
          minOrder: editPromo.minOrder,
          status: editPromo.status,
        });
      } else {
        form.resetFields();
      }
    }
  }, [open, editPromo]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      const discountType = values.discountType;
      const discountValue = values.discountValue;
      const discount =
        discountType === "percent"
          ? `${discountValue}% OFF`
          : `$${discountValue.toFixed(2)} OFF`;
      onSave({
        ...values,
        id: editPromo?.id ?? Date.now(),
        discount,
        expires: values.expires
          ? dayjs(values.expires).format("MMM DD, YYYY")
          : (editPromo?.expires ?? "N/A"),
      });
      toast.success(
        isEdit
          ? `Coupon "${values.code}" updated!`
          : `Coupon "${values.code}" created!`,
      );
      onClose();
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      okText={isEdit ? "Save Changes" : "Create Coupon"}
      okButtonProps={{
        style: { backgroundColor: "#15803d", borderColor: "#15803d" },
      }}
      title={
        <span className="font-bold text-gray-800">
          {isEdit ? "Edit Coupon" : "Create Coupon"}
        </span>
      }
      centered
      destroyOnClose
    >
      <Form form={form} layout="vertical" className="pt-2">
        <Form.Item name="code" label="Coupon Code" rules={[{ required: true }]}>
          <Input placeholder="e.g. SUMMER20" className="rounded-xl uppercase" />
        </Form.Item>
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            name="discountType"
            label="Discount Type"
            rules={[{ required: true }]}
          >
            <Select
              options={[
                { value: "percent", label: "Percentage" },
                { value: "flat", label: "Flat Amount" },
              ]}
            />
          </Form.Item>
          <Form.Item
            name="discountValue"
            label="Discount Value"
            rules={[{ required: true }]}
          >
            <InputNumber
              min={0}
              className="w-full rounded-xl"
              placeholder="e.g. 10"
            />
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Form.Item
            name="minOrder"
            label="Min. Order ($)"
            rules={[{ required: true }]}
          >
            <InputNumber min={0} step={0.01} className="w-full rounded-xl" />
          </Form.Item>
          <Form.Item name="expires" label="Expiry Date">
            <DatePicker className="w-full rounded-xl" />
          </Form.Item>
        </div>
        <Form.Item name="status" label="Status" rules={[{ required: true }]}>
          <Select
            options={[
              { value: "Active", label: "Active" },
              { value: "Expired", label: "Expired" },
            ]}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CouponModal;
