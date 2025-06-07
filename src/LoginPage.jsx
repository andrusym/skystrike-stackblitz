import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import ThemeToggle from "./components/ThemeToggle";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = localStorage.getItem("theme") || "light";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email });
    }
  };

  return (
    <div className="login-container">
      <div className="login-page">
        <img
          src={theme === "dark" ? "/assets/skystrike-logo-dark.png" : "/assets/skystrike-logo-light.png"}
          alt="SkyStrike Logo"
          className="logo"
        />
        <div className="toggle-wrap"><ThemeToggle /></div>
        <h2>Login to SkyStrike</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;