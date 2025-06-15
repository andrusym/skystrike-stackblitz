import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const TradesPage = () => {
  const [trades, setTrades] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/trades/log")
      .then((res) => res.json())
      .then(setTrades)
      .catch(setError);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trade Log</h1>
      {error && <div className="text-red-600">Failed to load trades</div>}
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Symbol</th>
              <th className="border px-4 py-2">Qty</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t, idx) => (
              <tr key={idx} className="text-center">
                <td className="border px-4 py-1">{t.date}</td>
                <td className="border px-4 py-1">{t.symbol}</td>
                <td className="border px-4 py-1">{t.qty}</td>
                <td className="border px-4 py-1">{t.price}</td>
                <td className="border px-4 py-1">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TradesPage;
