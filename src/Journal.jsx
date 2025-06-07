import TradeJournalEditor from './components/TradeJournalEditor';

const Date = window.Date;
import React, { useState } from "react";

const Journal = () => {
  const [entries, setEntries] = useState([]);
  const [note, setNote] = useState("");

  const addEntry = () => {
    if (note.trim()) {
      setEntries((prev) => [...prev, { note, timestamp: new Date().toISOString() }]);
      setNote("");
    }
  };

  return (
    <div className="journal">
      <h2>Trade Journal</h2>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Enter your trade notes..." />
      <button onClick={addEntry}>Add Note</button>
      <ul>
        {entries.map((entry, idx) => (
          <li key={idx}>
            <strong>{entry.timestamp}:</strong> {entry.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Journal;

<TradeJournalEditor entry={{notes: '', tags: ''}} onSave={(e) => console.log('Saved journal:', e)} />
