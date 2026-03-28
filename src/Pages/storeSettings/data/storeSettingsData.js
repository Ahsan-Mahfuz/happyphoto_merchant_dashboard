export const defaultStoreInfo = {
  name: "Fresh Farms Co.",
  phone: "(555) 123-4567",
  address: "123 Market Street, San Francisco, CA 94105",
  email: "support@freshfarms.co",
};

export const defaultBusinessHours = [
  { day: "Monday", open: "08:00", close: "20:00", enabled: true },
  { day: "Tuesday", open: "08:00", close: "20:00", enabled: true },
  { day: "Wednesday", open: "08:00", close: "20:00", enabled: true },
  { day: "Thursday", open: "08:00", close: "20:00", enabled: true },
  { day: "Friday", open: "08:00", close: "20:00", enabled: true },
  { day: "Saturday", open: "08:00", close: "20:00", enabled: true },
  { day: "Sunday", open: "08:00", close: "20:00", enabled: true },
];

export const defaultDeliverySettings = {
  radius: 5,
  minOrder: 15.0,
  prepTime: 15,
};
