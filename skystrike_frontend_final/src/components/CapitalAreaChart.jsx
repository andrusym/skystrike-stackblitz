
import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS, LineElement, CategoryScale, LinearScale,
  PointElement, Filler, Tooltip, Legend
} from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const CapitalAreaChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    authFetch('/api/summary/capital-usage')
      .then(res => res.json())
      .then(data => {
        const labels = data.map(d => d.date);
        const values = data.map(d => d.capital);
        setChartData({
          labels,
          datasets: [{
            label: 'Capital Usage ($)',
            data: values,
            fill: true,
            backgroundColor: 'rgba(46,106,217,0.2)',
            borderColor: '#2e6ad9',
            tension: 0.4
          }]
        });
      });
  }, []);

  if (!chartData) return <p>Loading capital trend...</p>;
  return <Line data={chartData} options={{ responsive: true }} />;
};

export default CapitalAreaChart;
