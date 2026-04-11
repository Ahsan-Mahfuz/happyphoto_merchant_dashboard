import { useState } from "react";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { Popover, Switch } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "sonner";

const routeTitles = {
  "/":                "Dashboard",
  "/orders":          "Orders",
  "/products":        "Products",
  "/inventory":       "Inventory",
  "/delivery-status": "Delivery Status",
  "/customers":       "Customers",
  "/promotions":      "Promotions",
  "/analytics":       "Analytics",
  "/revenue":         "Revenue",
  "/store-settings":  "Store Settings",
  "/support":         "Support",
  "/profile":         "Profile",
};

const Navbar = ({ onMenuClick }) => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [storeOpen, setStoreOpen]     = useState(true);
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New order #006 received",        read: false, createdAt: "2 min ago" },
    { id: 2, message: "Low stock: Organic Bananas",     read: false, createdAt: "15 min ago" },
    { id: 3, message: "Order #003 marked as delivered", read: true,  createdAt: "1 hour ago" },
  ]);

  const navigate  = useNavigate();
  const location  = useLocation();

  // Resolve page title from current path
  const matchedKey =
    Object.keys(routeTitles)
      .filter((k) => k !== "/")
      .find((k) => location.pathname.startsWith(k)) ??
    (location.pathname === "/" ? "/" : null);
  const pageTitle = matchedKey ? routeTitles[matchedKey] : "Dashboard";

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleMarkAllRead = () =>
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const handleStoreToggle = (checked) => {
    setStoreOpen(checked);
    toast.success(checked ? "Store is now Open 🟢" : "Store is now Closed 🔴");
  };

  // ── Notification Popover Content ──────────────────────────
  const NotificationContent = (
    <div className="w-72">
      <div className="flex items-center justify-between px-4 pt-3 pb-2 border-b border-gray-100">
        <h3 className="text-sm font-semibold text-gray-800">Notifications</h3>
        {unreadCount > 0 && (
          <button
            onClick={handleMarkAllRead}
            className="text-xs font-semibold text-green-700 hover:underline"
          >
            Mark all as read
          </button>
        )}
      </div>

      <div className="max-h-64 overflow-y-auto">
        {notifications.length > 0 ? (
          notifications.map((n) => (
            <div
              key={n.id}
              onClick={() => { setPopoverOpen(false); navigate("/orders"); }}
              className={`flex items-start gap-3 px-4 py-3 border-b border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors ${
                !n.read ? "bg-green-50/50" : ""
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  !n.read ? "bg-green-600" : "border border-gray-300"
                }`}
              />
              <div className="flex-1 min-w-0">
                <p className={`text-sm ${!n.read ? "font-semibold text-gray-800" : "text-gray-500"}`}>
                  {n.message}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{n.createdAt}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="py-8 text-center text-sm text-gray-400">
            No notifications
          </div>
        )}
      </div>

      <div className="px-4 py-2.5 border-t border-gray-100">
        <button
          onClick={() => { setPopoverOpen(false); navigate("/orders"); }}
          className="w-full text-xs font-semibold text-green-700 text-center py-1 rounded-lg hover:bg-gray-50 transition-colors"
        >
          View all →
        </button>
      </div>
    </div>
  );

  return (
    <header className="w-full bg-white border-b border-gray-100 px-4 sm:px-6 py-3.5 flex items-center gap-3 flex-shrink-0">

      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition flex-shrink-0"
        aria-label="Open menu"
      >
        <TbMenu2 size={22} />
      </button>

      {/* Page Title */}
      <h1 className="text-sm font-bold text-gray-800 flex-1 truncate">
        {pageTitle}
      </h1>

      {/* Right controls */}
      <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">

        {/* Store Open toggle — hidden on very small screens */}
        {/* <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-medium text-gray-500 whitespace-nowrap">
            Store {storeOpen ? "Open" : "Closed"}
          </span>
          <Switch
            checked={storeOpen}
            onChange={handleStoreToggle}
            style={{ backgroundColor: storeOpen ? "#16a34a" : "#d1d5db" }}
          />
        </div> */}

        {/* Notification Bell */}
        <Popover
          content={NotificationContent}
          trigger="click"
          placement="bottomRight"
          open={popoverOpen}
          onOpenChange={setPopoverOpen}
          overlayInnerStyle={{ padding: 0, borderRadius: 14, overflow: "hidden" }}
          overlayStyle={{ boxShadow: "0 8px 30px rgba(0,0,0,0.10)" }}
        >
          <button className="relative w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-green-400 hover:text-green-700 transition-all bg-white">
            <MdOutlineNotificationsNone size={20} />
            {unreadCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 min-w-[17px] h-[17px] bg-red-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center px-1 leading-none">
                {unreadCount}
              </span>
            )}
          </button>
        </Popover>

        {/* Avatar + merchant info */}
        <div
          className="flex items-center gap-2 cursor-pointer group"
          onClick={() => navigate("/profile")}
        >
          <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-xs font-bold select-none">FF</span>
          </div>
          <div className="hidden md:block leading-tight">
            <p className="text-xs font-bold text-gray-800 group-hover:text-green-700 transition-colors whitespace-nowrap">
              Fresh Farms Co.
            </p>
            <p className="text-[11px] text-gray-400">Merchant Admin</p>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Navbar;