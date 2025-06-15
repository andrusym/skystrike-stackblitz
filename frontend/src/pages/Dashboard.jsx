
import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  const [data, setData] = useState({});
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    authFetch("/api/dashboard")
      .then(res => res.json())
      .then((res) => {
        setData(res);
        setChartData(res.pnl_trend || []);
      });
  }, []);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white shadow p-4 rounded">
          <div className="text-sm text-gray-500">Net P&L</div>
          <div className="text-xl font-bold text-green-600">${data.net_pl?.toFixed(2)}</div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <div className="text-sm text-gray-500">Win Rate</div>
          <div className="text-xl font-bold">{data.win_rate}%</div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <div className="text-sm text-gray-500">Active Strategies</div>
          <div className="text-xl font-bold">{data.active_strategies}</div>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <div className="text-sm text-gray-500">ML Engine</div>
          <div className={`text-xl font-bold ${data.ml_status === 'online' ? 'text-green-600' : 'text-red-600'}`}>
            {data.ml_status}
          </div>
        </div>
      </div>

      <div className="bg-white shadow p-4 rounded">
        <h2 className="text-lg font-semibold mb-2">P&L Trend</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={chartData}>
            <Line type="monotone" dataKey="pnl" stroke="#3b82f6" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
