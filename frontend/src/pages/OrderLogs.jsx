import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const OrderLogs = () => {
  const [logs, setLogs] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    authFetch("/api/orders/logs")
      .then((res) => res.json())
      .then(setLogs)
      .catch(() => setError("Could not load order logs"));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Order Log</h1>
      {error && <div className="text-red-600">{error}</div>}
      <ul className="space-y-2">
        {logs.map((log, idx) => (
          <li key={idx} className="bg-white shadow p-3 rounded text-sm">
            {log.timestamp} - {log.action} - {log.status}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderLogs;
