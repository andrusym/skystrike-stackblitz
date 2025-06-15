import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const WealthDashboard = () => {
  const [data, setData] = useState(null);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    authFetch('/api/wealth/overview')
      .then(res => res.json())
      .then(setData)
      .catch(console.error);
  }, []);

  const handleChange = (key, value) => {
    setData(prev => ({ ...prev, [key]: value }));
  };

  const save = () => {
    setSaving(true);
    authFetch('/api/wealth/update', {
      method: 'POST',
      body: JSON.stringify(data)
    }).finally(() => setSaving(false));
  };

  if (!data) return <p>Loading...</p>;

  return (
    <div className="page-container">
      <h2>Wealth Engine</h2>

      <label>ETF Allocation (%):</label>
      <input type="number" value={data.etf_allocation} onChange={e => handleChange('etf_allocation', e.target.value)} />

      <label>CSP Allocation (%):</label>
      <input type="number" value={data.csp_allocation} onChange={e => handleChange('csp_allocation', e.target.value)} />

      <label>Yield Curve Scaling:</label>
      <input type="number" value={data.yield_scaling} onChange={e => handleChange('yield_scaling', e.target.value)} />

      <button onClick={save} disabled={saving}>
        {saving ? "Saving..." : "Save Changes"}
      </button>
    </div>
  );
};

export default WealthDashboard;
