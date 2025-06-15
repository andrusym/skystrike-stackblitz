import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const RiskPage = () => {
  const [risk, setRisk] = useState(null);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

  useEffect(() => {
    fetchRisk();
  }, []);

  const fetchRisk = () => {
    authFetch("/api/risk/limits")
      .then((res) => res.json())
      .then(setRisk)
      .catch(setError);
  };

  const toggleGamma = () => {
    setUpdating(true);
    authFetch("/api/risk/gamma", {
      method: "POST",
      body: JSON.stringify({ enabled: !risk.gamma_enabled }),
      headers: { "Content-Type": "application/json" },
    })
      .then(fetchRisk)
      .finally(() => setUpdating(false));
  };

  if (!risk) return <div>Loading risk limits...</div>;
  if (error) return <div className="text-red-600">Failed to load risk data</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Risk Monitor</h1>
      <div className="grid grid-cols-2 gap-4 mb-6">
        {Object.entries(risk.limits || {}).map(([key, val]) => (
          <div key={key} className="bg-white rounded shadow p-4">
            <div className="text-sm text-gray-500">{key}</div>
            <div className="text-lg font-semibold">{val}</div>
          </div>
        ))}
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-semibold mb-2">Gamma Protection</h2>
        <button
          onClick={toggleGamma}
          disabled={updating}
          className={`px-4 py-2 rounded ${
            risk.gamma_enabled ? "bg-green-600 text-white" : "bg-gray-300"
          }`}
        >
          {risk.gamma_enabled ? "Enabled" : "Disabled"}
        </button>
      </div>
    </div>
  );
};

export default RiskPage;
