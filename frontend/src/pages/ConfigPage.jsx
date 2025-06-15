import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const ConfigPage = () => {
  const [config, setConfig] = useState(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/config")
      .then((res) => res.json())
      .then(setConfig)
      .catch(setError);
  }, []);

  const toggle = (key) => {
    authFetch("/api/config/toggle", {
      method: "POST",
      body: JSON.stringify({ key }),
      headers: { "Content-Type": "application/json" }
    })
      .then((res) => res.json())
      .then(setConfig)
      .catch(setError);
  };

  if (!config) return <div>Loading config...</div>;
  if (error) return <div className="text-red-600">Failed to load config</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Platform Configuration</h1>

      <div className="space-y-4">
        {["smart_scaling", "goal_aware_allocation", "correlation_monitor"].map((key) => (
          <div key={key} className="bg-white rounded shadow p-4">
            <div className="text-sm text-gray-500">{key.replace(/_/g, " ")}</div>
            <button
              onClick={() => toggle(key)}
              className={`px-4 py-2 rounded ${
                config[key] ? "bg-green-600 text-white" : "bg-gray-300"
              }`}
            >
              {config[key] ? "Enabled" : "Disabled"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConfigPage;
