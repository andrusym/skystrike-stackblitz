import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const MLPage = () => {
  const [ml, setML] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/ml/status")
      .then((res) => res.json())
      .then(setML)
      .catch(setError);
  }, []);

  if (!ml) return <div>Loading ML engine status...</div>;
  if (error) return <div className="text-red-600">Failed to load ML status</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">ML Engine Lifecycle</h1>
      <div className="space-y-2 mb-6">
        <div>Heartbeat: <span className={ml.heartbeat ? "text-green-600" : "text-red-600"}>{ml.heartbeat ? "Active" : "Missing"}</span></div>
        <div>Retry Window: {ml.retry_window}</div>
        <div>Cooldown Mode: {ml.cooldown_active ? "ON" : "OFF"}</div>
        <div>Last Degrade Trigger: {ml.last_degrade}</div>
      </div>
    </div>
  );
};

export default MLPage;
