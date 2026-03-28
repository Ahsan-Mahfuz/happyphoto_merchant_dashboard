export const weeklyRevenue = [
  { day: "Mon", revenue: 520 },
  { day: "Tue", revenue: 780 },
  { day: "Wed", revenue: 620 },
  { day: "Thu", revenue: 910 },
  { day: "Fri", revenue: 840 },
  { day: "Sat", revenue: 1100 },
  { day: "Sun", revenue: 930 },
];

export const weeklyOrders = [
  { day: "Mon", orders: 22 },
  { day: "Tue", orders: 38 },
  { day: "Wed", orders: 28 },
  { day: "Thu", orders: 45 },
  { day: "Fri", orders: 40 },
  { day: "Sat", orders: 52 },
  { day: "Sun", orders: 20 },
];

export const todayRevenue = [
  { hour: "9AM", revenue: 120 },
  { hour: "10AM", revenue: 210 },
  { hour: "11AM", revenue: 180 },
  { hour: "12PM", revenue: 340 },
  { hour: "1PM", revenue: 290 },
  { hour: "2PM", revenue: 108 },
];

export const todayOrders = [
  { hour: "9AM", orders: 5 },
  { hour: "10AM", orders: 9 },
  { hour: "11AM", orders: 7 },
  { hour: "12PM", orders: 14 },
  { hour: "1PM", orders: 11 },
  { hour: "2PM", orders: 4 },
];

export const topProducts = [
  { name: "Organic Bananas", units: 145, revenue: 433.55 },
  { name: "Whole Milk 1 Gal", units: 98, revenue: 441.0 },
  { name: "Eggs 12ct", units: 85, revenue: 339.15 },
  { name: "Chicken Breast", units: 62, revenue: 775.0 },
  { name: "Sourdough Bread", units: 54, revenue: 323.46 },
];

export const periodConfig = {
  Today: {
    revenueData: todayRevenue,
    ordersData: todayOrders,
    revenueKey: "revenue",
    ordersKey: "orders",
    xKey: "hour",
    revenueTotal: "$1,247.00",
    ordersTotal: "50 orders today",
  },
  Weekly: {
    revenueData: weeklyRevenue,
    ordersData: weeklyOrders,
    revenueKey: "revenue",
    ordersKey: "orders",
    xKey: "day",
    revenueTotal: "$4,700.00",
    ordersTotal: "245 orders this week",
  },
  Monthly: {
    revenueData: weeklyRevenue.map((d, i) => ({
      ...d,
      revenue: d.revenue * 4.2,
      day: `W${i + 1}`,
    })),
    ordersData: weeklyOrders.map((d, i) => ({
      ...d,
      orders: d.orders * 4.2,
      day: `W${i + 1}`,
    })),
    revenueKey: "revenue",
    ordersKey: "orders",
    xKey: "day",
    revenueTotal: "$19,740.00",
    ordersTotal: "1,029 orders this month",
  },
};
