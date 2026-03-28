export const ordersData = [
  { id: "ORD-001", customer: "Sarah M.",  items: 4, amount: 45.50, status: "New",       time: "5m ago"  },
  { id: "ORD-002", customer: "Tom K.",    items: 2, amount: 18.25, status: "Preparing", time: "12m ago" },
  { id: "ORD-003", customer: "Lisa R.",   items: 8, amount: 92.00, status: "Ready",     time: "25m ago" },
  { id: "ORD-004", customer: "James W.",  items: 3, amount: 34.75, status: "Delivering",time: "41m ago" },
  { id: "ORD-005", customer: "Emily T.",  items: 5, amount: 61.00, status: "Completed", time: "55m ago" },
  { id: "ORD-006", customer: "David P.",  items: 1, amount: 8.50,  status: "New",       time: "2m ago"  },
  { id: "ORD-007", customer: "Mia C.",    items: 6, amount: 72.30, status: "Cancelled", time: "1h ago"  },
];

export const statusConfig = {
  New:        { color: "text-blue-600",   bg: "bg-blue-50",   border: "border-blue-200"   },
  Preparing:  { color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" },
  Ready:      { color: "text-green-600",  bg: "bg-green-50",  border: "border-green-200"  },
  Delivering: { color: "text-purple-600", bg: "bg-purple-50", border: "border-purple-200" },
  Completed:  { color: "text-gray-600",   bg: "bg-gray-100",  border: "border-gray-200"   },
  Cancelled:  { color: "text-red-600",    bg: "bg-red-50",    border: "border-red-200"    },
};

export const tabs = ["All", "New", "Preparing", "Ready", "Delivering", "Completed", "Cancelled"];