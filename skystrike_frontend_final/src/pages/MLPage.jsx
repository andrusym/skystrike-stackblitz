import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const MLPage = () => {
  const [mlData, setMLData] = useState(null);

  useEffect(() => {
    authFetch('/api/ml/health')
      .then(res => res.json())
      .then(setMLData)
      .catch(() => setMLData(null));
  }, []);

  if (!mlData) return <p>Loading ML lifecycle data...</p>;

  return (
    <div className="page-container">
      <h2>ML Lifecycle Manager</h2>
      <p><strong>Active Model:</strong> {mlData.model_version}</p>
      <p><strong>Confidence Drift:</strong> {mlData.confidence_drift}%</p>
      <p><strong>Retry Triggered:</strong> {mlData.retry_trigger ? "Yes" : "No"}</p>
    </div>
  );
};

export default MLPage;
