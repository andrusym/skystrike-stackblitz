import React from "react";

const StrategyCard = ({ strategy }) => {
  return (
    <div className="strategy-card">
      <h2>{strategy.name}</h2>
      <p>Status: {strategy.status}</p>
      <p>Contracts: {strategy.contracts}</p>
      <p>P&L: ${strategy.pnl}</p>
    </div>
  );
};

export default StrategyCard;
