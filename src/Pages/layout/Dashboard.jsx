import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Shared/Sidebar";
import Navbar from "./Shared/Navbar";

const Dashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* ── Desktop Sidebar ── */}
      <aside className="hidden lg:flex flex-col w-64 flex-shrink-0 h-screen border-r border-gray-100 shadow-sm">
        <Sidebar onLogout={() => {}} />
      </aside>

      {/* ── Mobile Drawer — controlled entirely here ── */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 flex lg:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
          <div
            className="relative w-64 h-full bg-white shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <Sidebar onClose={() => setMobileOpen(false)} onLogout={() => {}} />
          </div>
        </div>
      )}

      {/* ── Main Content ── */}
      <div className="flex flex-col flex-1 min-w-0  overflow-hidden">
        <Navbar onMenuClick={() => setMobileOpen(true)} />
        <main className="flex-1 overflow-y-auto px-2 py-2 overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
