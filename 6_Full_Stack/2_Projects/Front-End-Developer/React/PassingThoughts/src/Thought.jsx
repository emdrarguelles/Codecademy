import { useState, useEffect } from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const [timeLeft, setTimeLeft] = useState(Math.floor((thought.expiresAt - Date.now()) / 1000))

  useEffect(() => {
    const timeRemaining = thought.expiresAt - Date.now();
    const timeout = setTimeout(() => {
      removeThought(thought.id)
    }, timeRemaining);

    return () => {
      clearTimeout(timeout);
    };
  }, [thought])

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeLeft = (Math.floor((thought.expiresAt - Date.now()) / 1000))
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [thought.expiresAt])

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
      >
        &times;
      </button>
      <div className="text">
        {thought.text}
        {timeLeft > 0 && <span> - {timeLeft}s</span>}
      </div>
    </li>
  );
}
