export const inventoryData = [
  { id: 1, name: "Organic Bananas", stock: 45, status: "In Stock",    lastUpdated: "Today, 10:30 AM" },
  { id: 2, name: "Whole Milk 1 Gal",stock: 12, status: "In Stock",    lastUpdated: "Today, 09:15 AM" },
  { id: 3, name: "Sourdough Bread", stock: 0,  status: "Out of Stock", lastUpdated: "Yesterday, 04:20 PM" },
  { id: 4, name: "Chicken Breast",  stock: 8,  status: "Low Stock",   lastUpdated: "Today, 08:00 AM" },
  { id: 5, name: "Avocado",         stock: 24, status: "In Stock",    lastUpdated: "Yesterday, 11:45 AM" },
  { id: 6, name: "Eggs 12ct",       stock: 3,  status: "Low Stock",   lastUpdated: "Today, 01:10 PM" },
  { id: 7, name: "Orange Juice",    stock: 15, status: "In Stock",    lastUpdated: "Today, 11:00 AM" },
  { id: 8, name: "Seasonal Item",   stock: 0,  status: "Out of Stock", lastUpdated: "Yesterday, 02:00 PM" },
];

export const statusConfig = {
  "In Stock":    { dot: "bg-green-500",  color: "text-green-700",  label: "In Stock"     },
  "Low Stock":   { dot: "bg-yellow-500", color: "text-yellow-700", label: "Low Stock"    },
  "Out of Stock":{ dot: "bg-red-500",    color: "text-red-600",    label: "Out of Stock" },
};

export const statusFilters = ["All Statuses", "In Stock", "Low Stock", "Out of Stock"];