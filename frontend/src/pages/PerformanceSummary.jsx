
import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#34d399", "#f87171", "#60a5fa", "#fbbf24"];

const PerformanceSummary = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    authFetch("/api/summary")
      .then((res) => res.json())
      .then(setData);
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Performance Summary</h1>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Total Trades</div>
          <div className="text-xl font-bold">{data.total_trades}</div>
        </div>
        <div className="bg-white shadow rounded p-4">
          <div className="text-sm text-gray-500">Avg P&L per Trade</div>
          <div className="text-xl font-bold">${data.avg_pl?.toFixed(2)}</div>
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">Strategy Usage</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={data.strategy_distribution || []}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={90}
              fill="#8884d8"
              label
            >
              {data.strategy_distribution?.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceSummary;
