import { Eye } from "lucide-react";
import { toast } from "sonner";

const CustomersTable = ({ customers, onView }) => {
  if (customers.length === 0)
    return (
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm py-16 text-center text-sm text-gray-400">
        No customers found.
      </div>
    );

  return (
    <>
      {/* Desktop */}
      <div className="hidden sm:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-100">
              {[
                "Customer Name",
                "Total Orders",
                "Total Spending",
                "Last Order",
                "Action",
              ].map((h) => (
                <th
                  key={h}
                  className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {customers.map((c) => (
              <tr
                key={c.id}
                className="border-b border-gray-50 last:border-0 hover:bg-gray-50/60 transition-colors"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${c.color}`}
                    >
                      {c.initials}
                    </div>
                    <span className="font-semibold text-gray-800">
                      {c.name}
                    </span>
                  </div>
                </td>
                <td className="px-5 py-4 text-gray-600">{c.orders}</td>
                <td className="px-5 py-4 font-semibold text-green-600">
                  ${c.spending.toFixed(2)}
                </td>
                <td className="px-5 py-4 text-gray-500">{c.lastOrder}</td>
                <td className="px-5 py-4">
                  <button
                    onClick={() => {
                      onView(c);
                      toast.info(`Viewing ${c.name}'s profile`);
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition text-xs font-semibold"
                  >
                    <Eye size={13} /> View Profile
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="sm:hidden space-y-3">
        {customers.map((c) => (
          <div
            key={c.id}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex items-center gap-3"
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${c.color}`}
            >
              {c.initials}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-800">{c.name}</p>
              <p className="text-xs text-gray-400">
                {c.orders} orders ·{" "}
                <span className="text-green-600 font-semibold">
                  ${c.spending.toFixed(2)}
                </span>
              </p>
              <p className="text-xs text-gray-400">Last: {c.lastOrder}</p>
            </div>
            <button
              onClick={() => {
                onView(c);
                toast.info(`Viewing ${c.name}'s profile`);
              }}
              className="p-2 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 transition"
            >
              <Eye size={15} />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CustomersTable;
