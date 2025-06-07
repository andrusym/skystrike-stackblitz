import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div style={{ padding: "20px" }}>
    <h1>✅ SkyStrike is Rendering</h1>
    <p>This proves the frontend is working.</p>
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
