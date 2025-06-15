import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const BotsPanel = () => {
  const [bots, setBots] = useState([]);

  const fetchStatus = () => {
    authFetch("/api/bots/status")
      .then((res) => res.json())
      .then(setBots);
  };

  const toggleBot = (name) => {
    authFetch(`/api/bots/toggle`, {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" }
    }).then(fetchStatus);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Bot Control Panel</h1>
      {bots.map((b) => (
        <div key={b.name} className="bg-white shadow p-3 rounded mb-2">
          <div className="font-semibold">{b.name}</div>
          <div className="text-sm text-gray-500">Status: {b.active ? "🟢 Running" : "🔴 Stopped"}</div>
          <button
            onClick={() => toggleBot(b.name)}
            className={`mt-2 px-4 py-1 rounded ${b.active ? "bg-red-600" : "bg-green-600"} text-white`}
          >
            {b.active ? "Stop Bot" : "Start Bot"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BotsPanel;
