import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { toast } from "sonner";
import { salesData } from "../../Pages/dashboardHome/data/dashboardData";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload?.length) {
    return (
      <div className="bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-lg text-xs">
        <p className="font-semibold text-gray-700">{label}</p>
        <p className="text-violet-600 font-bold">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

const SalesTrend = () => (
  <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100">
    {/* Header */}
    <div className="flex items-center justify-between mb-4">
      <h2 className="text-sm font-bold text-gray-800">Sales Trend</h2>
      <button
        onClick={() => toast.info("Opening full report…")}
        className="text-xs text-violet-600 font-semibold hover:text-violet-800 transition-colors"
      >
        View Report
      </button>
    </div>

    {/* Chart */}
    <ResponsiveContainer width="100%" height={220}>
      <BarChart
        data={salesData}
        barCategoryGap="30%"
        margin={{ top: 4, right: 4, left: -20, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
        <XAxis
          dataKey="day"
          tick={{ fontSize: 11, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fontSize: 11, fill: "#9ca3af" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "#f3f4f6" }} />
        <Bar dataKey="sales" fill="#6d28d9" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SalesTrend;