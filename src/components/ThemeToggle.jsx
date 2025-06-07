import React, { useEffect, useState } from "react";

export const ThemeToggle = ({ onChangeTheme }) => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    onChangeTheme?.(theme);
  }, [theme, onChangeTheme]);

  return (
    <button onClick={() => setTheme(t => (t === "light" ? "dark" : "light"))} className="theme-toggle">
      {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
    </button>
  );
};
