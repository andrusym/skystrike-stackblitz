// src/components/ThemeToggle.jsx
import React, { useEffect, useState } from "react";

export const ThemeToggle = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    if (onChangeTheme) onChangeTheme(theme);
  }, [theme, onChangeTheme]);

  const toggle = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <button className="theme-toggle" onClick={toggle}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
