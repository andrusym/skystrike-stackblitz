import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  const fetchUsers = () => {
    authFetch("/api/admin/users")
      .then((res) => res.json())
      .then(setUsers)
      .catch(() => setMessage("Failed to load users"));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const reset2FA = (userId) => {
    authFetch(`/api/admin/user/${userId}/2fa/reset`, { method: "POST" })
      .then(() => {
        setMessage("2FA reset");
        fetchUsers();
      })
      .catch(() => setMessage("Reset failed"));
  };

  const resetPassword = (userId) => {
    const newPass = prompt("Enter new password:");
    if (!newPass) return;
    authFetch(`/api/admin/user/${userId}/password`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: newPass }),
    })
      .then(() => setMessage("Password updated"))
      .catch(() => setMessage("Password reset failed"));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      {message && <div className="mb-2 text-sm text-blue-600">{message}</div>}
      <div className="space-y-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white shadow p-4 rounded">
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>Role:</strong> {user.role}</div>
            <div><strong>2FA:</strong> {user.twofa_enabled ? "✅ Enabled" : "❌ Off"}</div>
            <div><strong>Profile:</strong> {user.profile || "Not set"}</div>
            <div className="mt-2 flex gap-2">
              <button onClick={() => reset2FA(user.id)} className="px-2 py-1 bg-yellow-500 text-white rounded">
                Reset 2FA
              </button>
              <button onClick={() => resetPassword(user.id)} className="px-2 py-1 bg-red-600 text-white rounded">
                Reset Password
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
