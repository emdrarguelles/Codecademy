import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState('');
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {setTime((prev) => prev + 1);}, 1000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const handleChange = ({target}) => {
    setName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name) return;
    setEntries((prev) => [...prev, { text: name, timestamp: time }]);
    setName('');
  };

  return (
    <>
      <h1>Time: {time}</h1>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={handleChange} />
        <button type='submit'>Add Text</button>
      </form>
      <ul>
        {entries.map((entry, i) => (
        <li key={i}>{entry.text} - {entry.timestamp}s</li>
        ))}
      </ul>
    </>
  );
}


