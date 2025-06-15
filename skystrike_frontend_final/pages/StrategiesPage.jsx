import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const StrategiesPage = () => {
  const [strategies, setStrategies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authFetch('/api/strategies/live')
      .then(res => res.json())
      .then(data => {
        setStrategies(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const toggleStrategy = (id, active) => {
    authFetch('/api/strategies/toggle', {
      method: 'POST',
      body: JSON.stringify({ id, active })
    });
  };

  return (
    <div className="page-container">
      <h2>Active Strategies</h2>
      {loading ? <p>Loading...</p> : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th><th>Symbol</th><th>Status</th><th>Confidence</th>
              <th>Capital</th><th>Fallback</th><th>Action</th>
            </tr>
          </thead>
          <tbody>
            {strategies.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.symbol}</td>
                <td>{s.status}</td>
                <td>{s.confidence}%</td>
                <td>${s.capital}</td>
                <td>{s.fallback ? "Yes" : "No"}</td>
                <td>
                  <button onClick={() => toggleStrategy(s.id, !s.active)}>
                    {s.active ? "Disable" : "Enable"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default StrategiesPage;
