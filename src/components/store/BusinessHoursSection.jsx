import { Switch } from "antd";

const BusinessHoursSection = ({ hours, onChange }) => {
  const update = (index, field, value) => {
    const updated = hours.map((h, i) =>
      i === index ? { ...h, [field]: value } : h,
    );
    onChange(updated);
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 space-y-4">
      <div>
        <h2 className="text-sm font-bold text-gray-800">Business Hours</h2>
        <p className="text-xs text-gray-400 mt-0.5">
          Set your store&apos;s operating hours for deliveries.
        </p>
      </div>

      <div className="space-y-3">
        {hours.map((h, i) => (
          <div key={h.day} className="flex items-center gap-3">
            {/* Day label */}
            <span className="text-sm text-gray-600 w-24 flex-shrink-0">
              {h.day}
            </span>

            {/* Open time */}
            <input
              type="time"
              value={h.open}
              disabled={!h.enabled}
              onChange={(e) => update(i, "open", e.target.value)}
              className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 w-24 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-40 disabled:cursor-not-allowed"
            />

            <span className="text-xs text-gray-400">to</span>

            {/* Close time */}
            <input
              type="time"
              value={h.close}
              disabled={!h.enabled}
              onChange={(e) => update(i, "close", e.target.value)}
              className="border border-gray-200 rounded-lg px-2 py-1.5 text-sm text-gray-700 w-24 focus:outline-none focus:ring-2 focus:ring-green-400 disabled:opacity-40 disabled:cursor-not-allowed"
            />

            {/* Toggle */}
            <div className="ml-auto">
              <Switch
                checked={h.enabled}
                onChange={(val) => update(i, "enabled", val)}
                size="small"
                style={{ backgroundColor: h.enabled ? "#16a34a" : "#d1d5db" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessHoursSection;
