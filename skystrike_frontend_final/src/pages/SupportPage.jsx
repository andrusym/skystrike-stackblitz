import React, { useEffect, useState } from 'react';
import authFetch from '../authFetch';

const SupportPage = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    authFetch('/api/support/status')
      .then(res => res.json())
      .then(setStatus)
      .catch(() => setStatus(null));
  }, []);

  const reconnect = () => {
    authFetch('/api/support/reconnect', { method: 'POST' })
      .then(() => alert('Reconnect attempt sent.'))
      .catch(() => alert('Reconnect failed.'));
  };

  if (!status) return <p>Checking system status...</p>;

  return (
    <div className="page-container">
      <h2>Support & Diagnostics</h2>
      <p><strong>Broker Status:</strong> {status.broker_connected ? "Connected" : "Disconnected"}</p>
      <p><strong>API Ping:</strong> {status.api_ping} ms</p>
      <button onClick={reconnect}>
        Reconnect Broker
      </button>
    </div>
  );
};

export default SupportPage;
