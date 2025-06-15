import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const Strategies = () => {
  const [strategies, setStrategies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/strategies/state")
      .then((res) => res.json())
      .then(setStrategies)
      .catch(setError);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Strategy Bots</h1>
      {error && <div className="text-red-600">Unable to load strategies</div>}
      <div className="grid md:grid-cols-2 gap-4">
        {strategies.map((s, i) => (
          <div key={i} className="bg-white shadow rounded p-4">
            <div className="text-lg font-semibold">{s.name}</div>
            <div>Status: <span className={`font-medium ${s.active ? "text-green-600" : "text-red-600"}`}>{s.active ? "Active" : "Inactive"}</span></div>
            <div>Capital: ${s.capital}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Strategies;
