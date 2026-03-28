import { MessageSquare, Ticket, HelpCircle } from "lucide-react";
import { toast } from "sonner";

const channels = [
  {
    icon: MessageSquare,
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    title: "Live Chat",
    desc: "Chat with our merchant support team in real-time.",
    action: "Start Chat →",
    actionColor: "text-purple-600 hover:text-purple-800",
    onClick: (toast) => toast.info("Opening live chat…"),
  },
  {
    icon: Ticket,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    title: "Submit Ticket",
    desc: "Report an issue or request assistance via email.",
    action: "Create Ticket →",
    actionColor: "text-blue-500 hover:text-blue-700",
    onClick: (toast) => toast.info("Scroll down to submit a ticket"),
  },
  {
    icon: HelpCircle,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
    title: "Help Center",
    desc: "Browse FAQs and merchant guides.",
    action: "View FAQs →",
    actionColor: "text-green-600 hover:text-green-800",
    onClick: (toast) => toast.info("Scroll down for FAQs"),
  },
];

const SupportChannels = () => (
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    {channels.map((c) => {
      const Icon = c.icon;
      return (
        <div
          key={c.title}
          className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col items-center text-center gap-3"
        >
          <div
            className={`w-12 h-12 rounded-full ${c.iconBg} flex items-center justify-center`}
          >
            <Icon size={22} className={c.iconColor} />
          </div>
          <div>
            <p className="text-sm font-bold text-gray-800">{c.title}</p>
            <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
          </div>
          <button
            onClick={() => c.onClick(toast)}
            className={`text-sm font-semibold transition ${c.actionColor}`}
          >
            {c.action}
          </button>
        </div>
      );
    })}
  </div>
);

export default SupportChannels;
