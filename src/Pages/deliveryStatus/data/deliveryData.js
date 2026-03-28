export const deliveriesData = [
  {
    id: "ORD-004",
    customer: "James W.",
    address: "321 Elm St",
    status: "Out for Delivery",
    progress: 75,
    dasher: { name: "Michael T.", vehicle: "Toyota Prius (Blue)" },
    eta: "15 mins",
  },
  {
    id: "ORD-005",
    customer: "Amy L.",
    address: "654 Maple Dr",
    status: "Pickup Pending",
    progress: 40,
    dasher: { name: "Sarah J.", vehicle: "Honda Civic (Silver)" },
    eta: "Arriving in 2 mins",
  },
  {
    id: "ORD-006",
    customer: "David P.",
    address: "987 Cedar Ln",
    status: "Dasher Assigned",
    progress: 20,
    dasher: { name: "David K.", vehicle: "Bicycle" },
    eta: "Arriving in 10 mins",
  },
];

export const statusConfig = {
  "Out for Delivery": { bg: "bg-purple-100", text: "text-purple-700", border: "border-purple-200" },
  "Pickup Pending":   { bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-200" },
  "Dasher Assigned":  { bg: "bg-blue-100",   text: "text-blue-700",   border: "border-blue-200"   },
  "Delivered":        { bg: "bg-green-100",  text: "text-green-700",  border: "border-green-200"  },
};