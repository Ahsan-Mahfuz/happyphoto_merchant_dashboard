import { Toaster } from "sonner";
import SupportChannels from "../../components/support/SupportChannels";
import SubmitTicketForm from "../../components/support/SubmitTicketForm";
import FAQSection from "../../components/support/FAQSection";


const Support = () => (
  <div className="space-y-4  min-h-full">
    <Toaster position="top-right" richColors closeButton />

    {/* Top channel cards */}
    <SupportChannels />

    {/* Bottom: form + FAQ side by side on lg+ */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <SubmitTicketForm />
      <FAQSection />
    </div>
  </div>
);

export default Support;