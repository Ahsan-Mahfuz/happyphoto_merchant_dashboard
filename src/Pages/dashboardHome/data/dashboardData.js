// ── Stats ──────────────────────────────────────────────────
export const statsData = [
  {
    id: "orders",
    label: "Today's Orders",
    value: "24",
    iconName: "ClipboardList",
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
  },
  {
    id: "pending",
    label: "Pending Orders",
    value: "5",
    iconName: "Clock",
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
  },
  {
    id: "revenue",
    label: "Today's Revenue",
    value: "$1,247.50",
    iconName: "DollarSign",
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
  },
  {
    id: "rating",
    label: "Average Rating",
    value: "4.8",
    iconName: "Star",
    iconColor: "text-yellow-500",
    iconBg: "bg-yellow-50",
  },
];

// ── Sales Trend ────────────────────────────────────────────
export const salesData = [
  { day: "Mon", sales: 3200 },
  { day: "Tue", sales: 5100 },
  { day: "Wed", sales: 4200 },
  { day: "Thu", sales: 6800 },
  { day: "Fri", sales: 5600 },
  { day: "Sat", sales: 7400 },
  { day: "Sun", sales: 6100 },
];

// ── Recent Orders ──────────────────────────────────────────
export const recentOrders = [
  {
    id: "001",
    name: "Sarah M.",
    items: 4,
    amount: 45.5,
    status: "New",
    time: "5m ago",
  },
  {
    id: "002",
    name: "Tom K.",
    items: 2,
    amount: 18.25,
    status: "Preparing",
    time: "12m ago",
  },
  {
    id: "003",
    name: "Lisa R.",
    items: 8,
    amount: 92.0,
    status: "Ready",
    time: "25m ago",
  },
  {
    id: "004",
    name: "James W.",
    items: 3,
    amount: 34.75,
    status: "Delivered",
    time: "41m ago",
  },
  {
    id: "005",
    name: "Emily T.",
    items: 5,
    amount: 61.0,
    status: "New",
    time: "55m ago",
  },
];

// ── Low Stock Alerts ───────────────────────────────────────
export const lowStockItems = [
  { id: 1, name: "Organic Bananas", left: 5, threshold: 10 },
  { id: 2, name: "Whole Milk 1 Gal", left: 2, threshold: 8 },
  { id: 3, name: "Sourdough Bread", left: 0, threshold: 5 },
];

// ── Quick Actions ──────────────────────────────────────────
export const quickActions = [
  { id: "add-product", label: "Add New Product", primary: true },
  { id: "view-orders", label: "View Active Orders", primary: false },
  { id: "update-inventory", label: "Update Inventory", primary: false },
];

// ── Status Tag Styles ──────────────────────────────────────
export const statusStyles = {
  New: { bg: "bg-blue-100", text: "text-blue-700" },
  Preparing: { bg: "bg-orange-100", text: "text-orange-700" },
  Ready: { bg: "bg-green-100", text: "text-green-700" },
  Delivered: { bg: "bg-purple-100", text: "text-purple-700" },
};
