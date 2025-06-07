import React from "react";
import { ThemeToggle } from "./ThemeToggle";
import logo from "../assets/skystrike-logo.png"; // Make sure the logo is here

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <img src={logo} alt="SkyStrike Logo" className="logo" />
        <ThemeToggle />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
