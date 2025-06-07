import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import logoLight from "../assets/skystrike-logo-light.png";
import logoDark from "../assets/skystrike-logo-dark.png";

const Layout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="app-layout">
      <aside className="sidebar">
        <div className="logo">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="SkyStrike Logo"
            style={{ height: "60px" }}
          />
        </div>
        <nav className="nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/journal">Journal</Link>
          <Link to="/settings">Settings</Link>
        </nav>
      </aside>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
