import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const SetupPage = () => {
  const [setup, setSetup] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/setup/status")
      .then((res) => res.json())
      .then(setSetup)
      .catch(setError);
  }, []);

  if (!setup) return <div>Loading setup status...</div>;
  if (error) return <div className="text-red-600">Setup load failed</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Setup Status</h1>
      <pre className="bg-gray-100 p-4 rounded overflow-auto">{JSON.stringify(setup, null, 2)}</pre>
    </div>
  );
};

export default SetupPage;
