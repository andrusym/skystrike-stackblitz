import React from "react";

const MLQueueWidget = ({ queue }) => {
  return (
  <div className="app-container">
    <div className="ml-queue-widget">
      <h3>Upcoming ML Trades</h3>
      <ul>
        {queue.map((trade, idx) => (
          <li key={idx}>{trade}</li>
        ))}
      </ul>
    </div>
  
  </div>
);
};

export default MLQueueWidget;
