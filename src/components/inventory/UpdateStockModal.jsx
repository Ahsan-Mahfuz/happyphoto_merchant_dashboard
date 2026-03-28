import { useEffect } from "react";
import { Modal, Form, InputNumber } from "antd";
import { toast } from "sonner";

const UpdateStockModal = ({ open, onClose, onSave, item }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (open && item) form.setFieldsValue({ stock: item.stock });
  }, [open, item]);

  const handleOk = () => {
    form.validateFields().then(({ stock }) => {
      onSave(item.id, stock);
      toast.success(`Stock updated for "${item.name}"`);
      onClose();
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      okText="Update Stock"
      okButtonProps={{ style: { backgroundColor: "#15803d", borderColor: "#15803d" } }}
      title={<span className="font-bold text-gray-800">Update Stock — {item?.name}</span>}
      centered
      destroyOnClose
    >
      <Form form={form} layout="vertical" className="pt-2">
        <Form.Item
          name="stock"
          label="New Stock Quantity"
          rules={[{ required: true, message: "Please enter a quantity" }]}
        >
          <InputNumber min={0} className="w-full rounded-xl" placeholder="Enter quantity" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UpdateStockModal;