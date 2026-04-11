import { Toaster } from "sonner";
import StatCards from "../../components/dashboardHome/StatCards";
import SalesTrend from "../../components/dashboardHome/SalesTrend";
import RecentOrders from "../../components/dashboardHome/RecentOrders";
import QuickActions from "../../components/dashboardHome/QuickActions";
import LowStockAlerts from "../../components/dashboardHome/LowStockAlerts";

const DashboardHome = () => {
  return (
    <div className="min-h-full !pb-20">
      {/* Toaster */}
      <Toaster position="top-right" richColors closeButton />

      {/* Stat Cards */}
      <StatCards />

      {/* Main grid: left col (chart + orders) | right col (actions + stock) */}
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4 mt-4">
        {/* Left column */}
        <div className="space-y-4">
          <SalesTrend />
          <RecentOrders />
        </div>

        {/* Right column */}
        <div className="space-y-4">
          <QuickActions />
          {/* <LowStockAlerts /> */}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;