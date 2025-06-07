import React, { useState } from "react";
import "../App.css"; // Ensures consistent styling
import Layout from "../components/Layout";

const Settings = () => {
  const [email, setEmail] = useState("user@example.com");
  const [notifications, setNotifications] = useState(true);
  const [theme, setTheme] = useState("light");

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Replace with backend API call
    console.log("Settings saved:", { email, notifications, theme });
    alert("Settings saved successfully.");
  };

  return (
    <Layout>
      <div className="settings-page">
        <h2>Account Settings</h2>
        <form className="settings-form" onSubmit={handleSave}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>
            <input
              type="checkbox"
              checked={notifications}
              onChange={(e) => setNotifications(e.target.checked)}
            />
            Enable email notifications
          </label>

          <label>Theme</label>
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>

          <button type="submit">Save Changes</button>
        </form>
      </div>
    </Layout>
  );
};

export default Settings;
