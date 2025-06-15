import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const TradesPage = () => {
  const [trades, setTrades] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    authFetch('/api/trades/log')
      .then(res => res.json())
      .then(data => {
        setTrades(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h2>Trade History</h2>
      {loading ? <p>Loading...</p> : (
        <table className="data-table">
          <thead>
            <tr>
              <th>Strategy</th><th>Symbol</th><th>Status</th>
              <th>Entry</th><th>Exit</th><th>P&L</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t, i) => (
              <tr key={i}>
                <td>{t.strategy}</td>
                <td>{t.symbol}</td>
                <td>{t.status}</td>
                <td>{t.entry_time}</td>
                <td>{t.exit_time || "—"}</td>
                <td>{t.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TradesPage;
