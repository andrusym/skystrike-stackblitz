import React from "react";

const PinnedTickerPanel = ({ tickers }) => {
  return (
  <div className="app-container">
    <aside className="pinned-ticker-panel">
      <h4>Watchlist</h4>
      <ul>
        {tickers.map((ticker, idx) => (
          <li key={idx}>
            {ticker.symbol}: {ticker.price}
          </li>
        ))}
      </ul>
    </aside>
  
  </div>
);
};

export default PinnedTickerPanel;
