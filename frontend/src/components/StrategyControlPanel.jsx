import React from "react";
const StrategyControlPanel = ({ onPause, onResume }) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPause}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
      >
        Pause
      </button>
      <button
        onClick={onResume}
        className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Resume
      </button>
    </div>
  );
};

export default StrategyControlPanel;
