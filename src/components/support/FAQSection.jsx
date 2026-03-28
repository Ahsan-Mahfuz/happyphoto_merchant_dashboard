import { Collapse } from "antd";
import { faqItems } from "../../Pages/support/data/supportData";

const FAQSection = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6">
    <h3 className="text-sm font-bold text-gray-800 mb-4">Frequently Asked Questions</h3>

    <Collapse
      accordion
      ghost
      expandIconPosition="end"
      items={faqItems.map((item) => ({
        key: item.key,
        label: (
          <span className="text-sm font-medium text-gray-700">{item.question}</span>
        ),
        children: (
          <p className="text-sm text-gray-500 leading-relaxed pb-1">{item.answer}</p>
        ),
      }))}
      className="[&_.ant-collapse-item]:border-b [&_.ant-collapse-item]:border-gray-100 [&_.ant-collapse-item:last-child]:border-0 [&_.ant-collapse-header]:py-3.5"
    />
  </div>
);

export default FAQSection;