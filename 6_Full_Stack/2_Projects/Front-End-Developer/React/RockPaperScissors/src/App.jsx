import { useState } from "react";
import styles from './App.module.css';

const CHOICES = [
  { name: "rock", emoji: "✊" },
  { name: "paper", emoji: "✋" },
  { name: "scissors", emoji: "✌️" },
];

const choiceStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: 40,
}

const emojiStyles = {
  fontSize: 64,
  marginRight: 20,
}

const nameStyles = {
  margin: 0,
  fontSize: 24,
  color: '#ffff',
}

const resultStyle = {
  marginTop: 10,
  marginBottom: 20,
  fontSize: 48,
  color: '#ffff',
}


function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [codeyChoice, setCodeyChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerScore, setPlayerScore] = useState(0);
  const [codeyScore, setCodeyScore] = useState(0);

  function handlePlayerChoice(choice) {
    setIsPlaying(true);
    const codeyChoice = CHOICES[Math.floor(Math.random() * CHOICES.length)];
    setPlayerChoice(choice);
    setCodeyChoice(codeyChoice);
    if (choice.name === codeyChoice.name) {
      setResult("Tie!");
    } else if (
      (choice.name === "rock" && codeyChoice.name === "scissors") ||
      (choice.name === "paper" && codeyChoice.name === "rock") ||
      (choice.name === "scissors" && codeyChoice.name === "paper")
    ) {
      setResult("You win!");
      setPlayerScore(prev => prev + 1);
    } else {
      setResult("You lose!");
      setCodeyScore(prev => prev + 1);
    }
  }

  function resetGame() {
    setIsPlaying(false);
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
  }

  function newGame() {
    setIsPlaying(false);
    setPlayerChoice(null);
    setCodeyChoice(null);
    setResult(null);
    setPlayerScore(0);
    setCodeyScore(0);
  }

  return (
    <div className={styles.container}>
      <h1 style={{fontSize: 48, margin: 0}}>Rock Paper Scissors</h1>
      <p style={{paddingTop: 50}}>You: {playerScore} | Codey: {codeyScore}</p>
      <div className={styles.choices}>
        {CHOICES.map((choice) => (
          <button
            style={{fontSize: 36, margin:0}}
            key={choice.name}
            onClick={() => handlePlayerChoice(choice)}
            aria-label={choice.name}
            disabled={isPlaying}
          >
            {choice.emoji}
          </button>
        ))}
      </div>
      {playerChoice && codeyChoice && (
        <div className={styles.results}>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{playerChoice.emoji}</span>
            <p style={nameStyles}>You chose {playerChoice.name}</p>
          </div>
          <div style={choiceStyles}>
            <span style={emojiStyles}>{codeyChoice.emoji}</span>
            <p style={nameStyles}>The computer chose {codeyChoice.name}</p>
          </div>
          <h2 style={resultStyle}>{result}</h2>
          <div style={{display: 'flex'}}>
            <button className={styles.button} onClick={resetGame}>Play again</button>
            <button className={styles.button} onClick={newGame}>New Game</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
