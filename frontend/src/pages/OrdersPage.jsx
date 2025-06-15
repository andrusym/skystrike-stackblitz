import React, { useEffect, useState } from "react";
import authFetch from "../authFetch";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    authFetch("/api/broker/orders/summary")
      .then((res) => res.json())
      .then(setOrders)
      .catch(setError);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Order Summary</h1>
      {error && <div className="text-red-600">Failed to fetch orders</div>}
      <ul className="space-y-2">
        {orders.map((o, i) => (
          <li key={i} className="bg-white shadow p-4 rounded">
            <div className="font-semibold">{o.symbol} - {o.action}</div>
            <div>Status: {o.status}</div>
            <div>Qty: {o.quantity} @ ${o.price}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
