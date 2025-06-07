import React, { useState, useEffect } from "react";
import "../App.css";
import logoLight from "../assets/skystrike-logo-light.png";
import logoDark from "../assets/skystrike-logo-dark.png";
import { useTheme } from "../ThemeContext";

const LoginPage = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
    // TODO: integrate with real auth
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img
          src={theme === "dark" ? logoDark : logoLight}
          alt="SkyStrike Logo"
          className="login-logo"
          style={{ height: "80px", marginBottom: "20px" }}
        />
        <h2>Login to SkyStrike</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
