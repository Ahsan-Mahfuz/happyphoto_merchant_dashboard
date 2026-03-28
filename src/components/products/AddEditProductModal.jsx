import { useEffect } from "react";
import { Modal, Form, Input, Select, InputNumber } from "antd";
import { toast } from "sonner";
import { categories, statusConfig } from "../../Pages/products/data/productsData";

const AddEditProductModal = ({ open, onClose, onSave, editProduct }) => {
  const [form] = Form.useForm();
  const isEdit = !!editProduct;

  useEffect(() => {
    if (open) {
      if (isEdit) {
        form.setFieldsValue(editProduct);
      } else {
        form.resetFields();
      }
    }
  }, [open, editProduct]);

  const handleOk = () => {
    form.validateFields().then((values) => {
      onSave({ ...values, id: editProduct?.id ?? Date.now(), emoji: editProduct?.emoji ?? "📦" });
      toast.success(isEdit ? `"${values.name}" updated!` : `"${values.name}" added!`);
      onClose();
    });
  };

  return (
    <Modal
      open={open}
      onCancel={onClose}
      onOk={handleOk}
      okText={isEdit ? "Save Changes" : "Add Product"}
      okButtonProps={{ style: { backgroundColor: "#15803d", borderColor: "#15803d" } }}
      title={<span className="font-bold text-gray-800">{isEdit ? "Edit Product" : "Add New Product"}</span>}
      centered
      destroyOnClose
    >
      <Form form={form} layout="vertical" className="pt-2">
        <Form.Item name="name" label="Product Name" rules={[{ required: true, message: "Required" }]}>
          <Input placeholder="e.g. Organic Bananas" className="rounded-xl" />
        </Form.Item>
        <div className="grid grid-cols-2 gap-3">
          <Form.Item name="category" label="Category" rules={[{ required: true }]}>
            <Select placeholder="Select" className="rounded-xl">
              {categories.filter((c) => c !== "All").map((c) => (
                <Select.Option key={c} value={c}>{c}</Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="status" label="Status" rules={[{ required: true }]}>
            <Select placeholder="Select">
              {Object.keys(statusConfig).map((s) => (
                <Select.Option key={s} value={s}>{s}</Select.Option>
              ))}
            </Select>
          </Form.Item>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Form.Item name="price" label="Price ($)" rules={[{ required: true }]}>
            <InputNumber min={0} step={0.01} className="w-full rounded-xl" placeholder="0.00" />
          </Form.Item>
          <Form.Item name="stock" label="Stock" rules={[{ required: true }]}>
            <InputNumber min={0} className="w-full rounded-xl" placeholder="0" />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default AddEditProductModal;