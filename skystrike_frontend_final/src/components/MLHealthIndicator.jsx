
import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const MLHealthIndicator = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    authFetch('/api/dashboard/ml-status')
      .then(res => res.json())
      .then(data => setStatus(data.status))
      .catch(() => setStatus('offline'));
  }, []);

  const getColor = (s) => {
    switch (s) {
      case 'healthy': return 'green';
      case 'degraded': return 'orange';
      case 'offline': return 'red';
      default: return 'gray';
    }
  };

  return (
    <div className="ml-health-card">
      <h3>ML Engine Status</h3>
      <p>
        <span style={{
          display: 'inline-block', width: 12, height: 12, borderRadius: '50%',
          backgroundColor: getColor(status), marginRight: 8
        }} />
        {status ? status.toUpperCase() : 'Checking...'}
      </p>
    </div>
  );
};

export default MLHealthIndicator;
