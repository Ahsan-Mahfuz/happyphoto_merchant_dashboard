/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Form, Input, Select } from "antd";
import { toast } from "sonner";
import { ticketCategories } from "../../Pages/support/data/supportData";

const SubmitTicketForm = () => {
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Ticket submitted! We'll respond within 24 hours.");
          form.resetFields();
        }, 800);
      })
      .catch(() => {
        toast.error("Please fill in all required fields.");
      });
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
      <h3 className="text-sm font-bold text-gray-800 mb-4">Submit a Request</h3>

      <Form form={form} layout="vertical" className="space-y-1">
        <Form.Item
          name="subject"
          label={
            <span className="text-xs font-semibold text-gray-600">Subject</span>
          }
          rules={[{ required: true, message: "Please enter a subject" }]}
          className="mb-3"
        >
          <Input
            placeholder="Brief description of the issue..."
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="category"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Category
            </span>
          }
          rules={[{ required: true, message: "Please select a category" }]}
          className="mb-3"
        >
          <Select
            placeholder="Select a category"
            options={ticketCategories.map((c) => ({ value: c, label: c }))}
            className="w-full"
          />
        </Form.Item>

        <Form.Item
          name="description"
          label={
            <span className="text-xs font-semibold text-gray-600">
              Description
            </span>
          }
          rules={[{ required: true, message: "Please provide details" }]}
          className="mb-4"
        >
          <Input.TextArea
            rows={5}
            placeholder="Please provide details..."
            className="rounded-xl"
          />
        </Form.Item>

        <button
          type="button"
          onClick={handleSubmit}
          disabled={submitting}
          className="w-full py-2.5 rounded-xl bg-green-700 hover:bg-green-800 active:scale-[0.98] text-white text-sm font-semibold transition-all shadow-sm disabled:opacity-70"
        >
          {submitting ? "Submitting…" : "Submit Ticket"}
        </button>
      </Form>
    </div>
  );
};

export default SubmitTicketForm;
