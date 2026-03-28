import { useState } from "react";
import { Toaster } from "sonner";
import { periodConfig } from "./data/analyticsData";
import AnalyticsCharts from "../../components/analytics/AnalyticsCharts";
import TopProducts from "../../components/analytics/TopProducts";

const periods = ["Today", "Weekly", "Monthly"];

const Analytics = () => {
  const [period, setPeriod] = useState("Weekly");
  const config = periodConfig[period];

  return (
    <div className="space-y-4 min-h-full">
      <Toaster position="top-right" richColors closeButton />

      {/* Period tabs */}
      <div className="flex justify-end">
        <div className="flex gap-1 bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                period === p
                  ? "bg-purple-100 text-purple-700 font-semibold"
                  : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
              }`}
            >
              {p}
            </button>
          ))}
          <button
            onClick={() => {}}
            className="px-4 py-1.5 rounded-lg text-sm font-medium text-gray-500 hover:text-gray-700 hover:bg-gray-50 transition-all"
          >
            Custom
          </button>
        </div>
      </div>

      <AnalyticsCharts period={period} config={config} />
      <TopProducts />
    </div>
  );
};

export default Analytics;
