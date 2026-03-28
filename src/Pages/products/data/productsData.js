export const productsData = [
  { id: 1, name: "Organic Bananas", category: "Produce",   price: 2.99,  stock: 45, status: "Active",      emoji: "🍌" },
  { id: 2, name: "Whole Milk 1 Gal", category: "Dairy",    price: 4.50,  stock: 12, status: "Active",      emoji: "🥛" },
  { id: 3, name: "Sourdough Bread",  category: "Bakery",   price: 5.99,  stock: 0,  status: "Out of Stock", emoji: "🍞" },
  { id: 4, name: "Chicken Breast",   category: "Meat",     price: 12.50, stock: 8,  status: "Active",      emoji: "🍗" },
  { id: 5, name: "Avocado",          category: "Produce",  price: 1.50,  stock: 24, status: "Active",      emoji: "🥑" },
  { id: 6, name: "Eggs 12ct",        category: "Dairy",    price: 3.99,  stock: 30, status: "Active",      emoji: "🥚" },
  { id: 7, name: "Orange Juice",     category: "Beverages",price: 4.99,  stock: 15, status: "Active",      emoji: "🍊" },
  { id: 8, name: "Seasonal Item",    category: "Produce",  price: 3.99,  stock: 0,  status: "Disabled",    emoji: "🎃" },
];

export const statusConfig = {
  Active:       { color: "text-green-700",  bg: "bg-green-50",  border: "border-green-200"  },
  "Out of Stock":{ color: "text-red-600",   bg: "bg-red-50",    border: "border-red-200"    },
  Disabled:     { color: "text-gray-500",   bg: "bg-gray-100",  border: "border-gray-200"   },
};

export const categories = ["All", "Produce", "Dairy", "Bakery", "Meat", "Beverages"];