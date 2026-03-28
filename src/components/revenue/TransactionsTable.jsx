import { transactions } from "../../Pages/revenue/data/revenueData";

const StatusBadge = ({ status }) =>
  status === "Completed" ? (
    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200">
      Completed
    </span>
  ) : (
    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200">
      Pending
    </span>
  );

const TransactionsTable = () => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
    <div className="px-5 py-4 border-b border-gray-100">
      <h3 className="text-sm font-bold text-gray-800">Recent Transactions</h3>
    </div>

    {/* Desktop */}
    <div className="hidden sm:block overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-100">
            {[
              "Transaction ID",
              "Order ID",
              "Order Amount",
              "Platform Fee (15%)",
              "Net Earnings",
              "Status",
              "Date",
            ].map((h) => (
              <th
                key={h}
                className="text-left px-5 py-3 text-xs font-semibold text-gray-400 uppercase tracking-wide whitespace-nowrap"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {transactions.map((t) => (
            <tr
              key={t.id}
              className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors"
            >
              <td className="px-5 py-3.5 font-bold text-gray-800">#{t.id}</td>
              <td className="px-5 py-3.5 text-gray-600">#{t.orderId}</td>
              <td className="px-5 py-3.5 text-gray-700">
                $ {t.amount.toFixed(2)}
              </td>
              <td className="px-5 py-3.5 text-red-500 font-medium">
                -$ {t.fee.toFixed(2)}
              </td>
              <td className="px-5 py-3.5 text-green-600 font-bold">
                $ {t.net.toFixed(2)}
              </td>
              <td className="px-5 py-3.5">
                <StatusBadge status={t.status} />
              </td>
              <td className="px-5 py-3.5 text-gray-400 text-xs whitespace-nowrap">
                {t.date}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Mobile */}
    <div className="sm:hidden divide-y divide-gray-50">
      {transactions.map((t) => (
        <div key={t.id} className="p-4 space-y-1">
          <div className="flex justify-between items-center">
            <span className="text-sm font-bold text-gray-800">#{t.id}</span>
            <StatusBadge status={t.status} />
          </div>
          <p className="text-xs text-gray-400">
            Order #{t.orderId} · {t.date}
          </p>
          <div className="flex gap-4 text-xs mt-1">
            <span className="text-gray-500">
              Amount:{" "}
              <strong className="text-gray-700">${t.amount.toFixed(2)}</strong>
            </span>
            <span className="text-red-500">Fee: -${t.fee.toFixed(2)}</span>
            <span className="text-green-600 font-bold">
              Net: ${t.net.toFixed(2)}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default TransactionsTable;
