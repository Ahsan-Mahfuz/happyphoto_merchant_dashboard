import { NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineSettings,
  MdOutlineSupport,
} from "react-icons/md";
import { BsBoxSeam, BsPeopleFill } from "react-icons/bs";
import { TbTruck, TbTag, TbX, TbLogout } from "react-icons/tb";
import { LuPackage } from "react-icons/lu";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { IoAnalyticsOutline } from "react-icons/io5";
import { RiStore2Line } from "react-icons/ri";

const menuItems = [
  { name: "Dashboard", link: "/", icon: <MdDashboard size={20} />, end: true },
  { name: "Orders", link: "/orders", icon: <BsBoxSeam size={18} /> },
  { name: "Products", link: "/products", icon: <LuPackage size={18} /> },
  { name: "Inventory", link: "/inventory", icon: <RiStore2Line size={18} /> },
  {
    name: "Delivery Status",
    link: "/delivery-status",
    icon: <TbTruck size={20} />,
  },
  { name: "Customers", link: "/customers", icon: <BsPeopleFill size={18} /> },
  { name: "Promotions", link: "/promotions", icon: <TbTag size={20} /> },
  {
    name: "Analytics",
    link: "/analytics",
    icon: <IoAnalyticsOutline size={20} />,
  },
  {
    name: "Revenue",
    link: "/revenue",
    icon: <PiCurrencyDollarSimpleBold size={20} />,
  },
  {
    name: "Store Settings",
    link: "/store-settings",
    icon: <MdOutlineSettings size={20} />,
  },
  // { name: "Support", link: "/support", icon: <MdOutlineSupport size={20} /> },
];

// Sidebar is now a pure presentational component.
// All drawer open/close logic lives in Dashboard.jsx.
// onClose  → passed only when rendered inside the mobile drawer
// onLogout → handler from parent
const Sidebar = ({ onClose, onLogout }) => (
  <div className="flex flex-col h-full bg-white">
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <img src="/logo.svg" alt="Logo" className="h-8 w-8 object-contain" />
        <span className="text-green-700 font-bold text-base tracking-tight">
          Merchant Panel
        </span>
      </div>
      {/* Show ✕ only inside the mobile drawer */}
      {onClose && (
        <button
          onClick={onClose}
          className="p-1.5 rounded-lg text-gray-400 hover:bg-gray-100 transition"
        >
          <TbX size={20} />
        </button>
      )}
    </div>

    {/* Nav */}
    <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-0.5">
      {menuItems.map((item) => (
        <NavLink
          to={item.link}
          key={item.link}
          end={item.end}
          onClick={onClose} // closes drawer on mobile when a link is tapped
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
              isActive
                ? "bg-green-50 text-green-700 font-semibold"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <span className={isActive ? "text-green-600" : "text-gray-400"}>
                {item.icon}
              </span>
              <span>{item.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>

    {/* Logout */}
    <div className="px-3 pb-5 pt-2 border-t border-gray-100">
      <button
        onClick={onLogout}
        className="flex items-center gap-3 px-3 py-2.5 w-full rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-all duration-150"
      >
        <TbLogout size={20} />
        <span>Logout</span>
      </button>
    </div>
  </div>
);

export default Sidebar;
