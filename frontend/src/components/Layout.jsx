import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/dashboard", label: "Dashboard" },
  { path: "/trades", label: "Trades" },
  { path: "/strategies", label: "Strategies" },
  { path: "/wealth", label: "Wealth" },
  { path: "/ml", label: "ML" },
  { path: "/risk", label: "Risk" },
  { path: "/setup", label: "Setup" },
  { path: "/orders", label: "Orders" },
  { path: "/config", label: "Config" },
  { path: "/summary", label: "Summary" },
  { path: "/support", label: "Support" },
  { path: "/editor", label: "Editor" },
  { path: "/admin", label: "Admin" },
];

export default function Layout() {
  const location = useLocation();
  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r p-4">
        <div className="text-xl font-bold mb-6 text-blue-700">SkyStrike</div>
        <nav className="flex flex-col gap-2">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className={`px-3 py-2 rounded hover:bg-blue-100 ${
                location.pathname === path ? "bg-blue-200 font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      </aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
