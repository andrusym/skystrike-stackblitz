import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Sidebar = () => {
  const { logout } = useAuth();

  const navLinks = [
    { to: "/dashboard", label: "Dashboard" },
    { to: "/strategies", label: "Strategies" },
    { to: "/trades", label: "Trades" },
    { to: "/wealth", label: "Wealth" },
    { to: "/risk", label: "Risk" },
    { to: "/ml", label: "ML" },
    { to: "/support", label: "Support" },
    { to: "/setup", label: "Setup" },
    { to: "/config", label: "Config" },
    { to: "/admin", label: "Admin" },
  ];

  return (
    <div className="w-60 min-h-screen bg-gray-900 text-white p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold text-cyan-400 mb-6">SkyStrike</h2>
        <nav className="space-y-2">
          {navLinks.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `block px-2 py-1 rounded hover:bg-gray-800 ${
                  isActive ? "bg-gray-800 font-bold underline" : ""
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
      <button
        onClick={logout}
        className="text-sm text-gray-400 hover:text-white mt-8"
      >
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
