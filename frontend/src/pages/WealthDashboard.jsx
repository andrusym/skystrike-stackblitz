import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const WealthDashboard = () => {
  const [wealth, setWealth] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/wealth/overview")
      .then((res) => res.json())
      .then(setWealth)
      .catch(setError);
  }, []);

  if (!wealth) return <div>Loading wealth data...</div>;
  if (error) return <div className="text-red-600">Failed to load wealth overview</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Wealth Overview</h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.entries(wealth).map(([key, val]) => (
          <div key={key} className="bg-white shadow rounded p-4">
            <div className="text-sm text-gray-500">{key}</div>
            <div className="text-lg font-semibold">${val}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WealthDashboard;
