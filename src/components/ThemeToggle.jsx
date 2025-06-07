import React, { useState, useEffect } from "react";

export const ThemeToggle = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    if (onChangeTheme) onChangeTheme(theme);
  }, [theme, onChangeTheme]);

  return (
    <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))} className="theme-toggle">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
