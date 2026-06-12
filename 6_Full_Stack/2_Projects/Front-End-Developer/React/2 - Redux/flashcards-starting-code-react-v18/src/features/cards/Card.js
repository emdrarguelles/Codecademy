import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import selector
import { cardsSelector } from '../cards/cardSlice';

export default function Card({ id, onResult, reset }) {
  const card = useSelector((state) => cardsSelector(state)[id]); 
  const [flipped, setFlipped] = useState(false);
  const [result, setResult] = useState(null); // Changed string "" to null for clean boolean checks
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    setFlipped(false);
    setResult(null);
    setAnswered(false);
  }, [reset]);

  return (
    <li className="card-item-container">
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
      {flipped && (
        <div className="card-action-buttons">
          <button 
            className={`correct ${answered && result === true ? "active" : ""} ${answered && result !== true ? "disabled-gray" : ""}`} 
            onClick={(e) => { setResult(true); setAnswered(true); onResult(true); }} 
            disabled={answered}
          >
            ✔
          </button>
          <button 
            className={`wrong ${answered && result === false ? "active" : ""} ${answered && result !== false ? "disabled-gray" : ""}`} 
            onClick={(e) => { setResult(false); setAnswered(true); onResult(false); }} 
            disabled={answered}
          >
            ✘
          </button>
        </div>
      )}
    </li>
  );
}