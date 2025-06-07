import React, { useState } from "react";
import { useAuth } from "./AuthContext";
import "./App.css"; // Ensure it's imported

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ email }); // Replace with real logic later
    }
  };

  return (
    <div className="login-page">
      <img src="/logo.png" alt="SkyStrike Logo" className="logo" /> {/* Optional logo */}
      <h2>Login to SkyStrike</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
