
import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, PointElement, LinearScale,
  Title, CategoryScale, Tooltip, Legend
} from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);

const DashboardChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    authFetch('/api/dashboard/pnl-history')
      .then(res => res.json())
      .then(data => {
        const labels = data.map(d => d.date);
        const values = data.map(d => d.pnl);
        setChartData({
          labels,
          datasets: [{ label: 'Daily P&L', data: values, fill: false, borderColor: '#2e6ad9', tension: 0.3 }]
        });
      });
  }, []);

  if (!chartData) return <p>Loading chart...</p>;
  return <Line data={chartData} options={{ responsive: true, maintainAspectRatio: false }} height={300} />;
};

export default DashboardChart;
