import React, { useState } from "react";

const AICopilot = () => {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState("");

  const handleQuery = () => {
    setReply("NLP module not yet connected. Your query: " + input);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">AI Copilot</h1>
      <input
        className="border rounded w-full p-2 mb-4"
        placeholder="Ask me anything about trades, risk, or strategies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleQuery} className="px-4 py-2 bg-blue-600 text-white rounded">
        Ask
      </button>
      {reply && <div className="mt-4 bg-gray-100 p-4 rounded">{reply}</div>}
    </div>
  );
};

export default AICopilot;
