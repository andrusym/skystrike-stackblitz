// src/components/Layout.jsx
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import lightLogo from "../assets/skystrike-logo-light.png";
import darkLogo from "../assets/skystrike-logo-dark.png";

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const logo = theme === "dark" ? darkLogo : lightLogo;

  return (
    <div className="layout">
      <header className="header">
        <img src={logo} alt="SkyStrike Logo" className="logo" />
        <ThemeToggle onChangeTheme={setTheme} />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
