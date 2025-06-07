import React, { useEffect, useState } from "react";

export const ThemeToggle = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    if (onChangeTheme) onChangeTheme(theme);
  }, [theme, onChangeTheme]);

  return (
    <button className="theme-toggle" onClick={() => setTheme(t => t === "light" ? "dark" : "light")}>
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};