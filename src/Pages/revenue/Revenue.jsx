import { Toaster } from "sonner";
import RevenueStatCards from "../../components/revenue/RevenueStatCards";
import TransactionsTable from "../../components/revenue/TransactionsTable";

const Revenue = () => (
  <div className="space-y-4 min-h-full">
    <Toaster position="top-right" richColors closeButton />
    <RevenueStatCards />
    <TransactionsTable />
  </div>
);

export default Revenue;
