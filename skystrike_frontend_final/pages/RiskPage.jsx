import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const RiskPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    authFetch('/api/risk/overview')
      .then(res => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (!data) return <p>Loading risk data...</p>;

  return (
    <div className="page-container">
      <h2>Risk Monitor</h2>
      <p><strong>Gamma Risk:</strong> {data.gamma_risk}</p>
      <p><strong>Correlation Alert:</strong> {data.correlation_warning ? "Yes" : "No"}</p>
      <ul>
        {data.conflicting_strategies?.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default RiskPage;
