import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DollarSign, ShoppingBag } from "lucide-react";

const ChartTooltip = ({ active, payload, label, prefix = "" }) => {
  if (active && payload?.length)
    return (
      <div className="bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-lg text-xs">
        <p className="font-semibold text-gray-700">{label}</p>
        <p className="font-bold" style={{ color: payload[0].fill }}>
          {prefix}
          {typeof payload[0].value === "number"
            ? payload[0].value.toLocaleString()
            : payload[0].value}
        </p>
      </div>
    );
  return null;
};

const AnalyticsCharts = ({ period, config }) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    {/* Revenue Trend */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-bold text-gray-800">Revenue Trend</h3>
          <p className="text-xs text-gray-400">
            Total: {config.revenueTotal} this {period.toLowerCase()}
          </p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center">
          <DollarSign size={16} className="text-green-600" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={config.revenueData}
          barCategoryGap="30%"
          margin={{ top: 8, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey={config.xKey}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<ChartTooltip prefix="$" />}
            cursor={{ fill: "#f9fafb" }}
          />
          <Bar
            dataKey={config.revenueKey}
            fill="#16a34a"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>

    {/* Orders per Day */}
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-sm font-bold text-gray-800">Orders per Day</h3>
          <p className="text-xs text-gray-400">Total: {config.ordersTotal}</p>
        </div>
        <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
          <ShoppingBag size={16} className="text-blue-500" />
        </div>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <BarChart
          data={config.ordersData}
          barCategoryGap="30%"
          margin={{ top: 8, right: 4, left: -20, bottom: 0 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#f0f0f0"
            vertical={false}
          />
          <XAxis
            dataKey={config.xKey}
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            tick={{ fontSize: 11, fill: "#9ca3af" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: "#f9fafb" }} />
          <Bar
            dataKey={config.ordersKey}
            fill="#2563eb"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);

export default AnalyticsCharts;
