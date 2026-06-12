import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams, Navigate } from "react-router-dom";
import Card from "../cards/Card";
import ROUTES from "../../app/routes";
// import quiz selector
import { quizzesSelector } from './quizzesSlice';

export default function Quiz() {
  const quizzes = useSelector(quizzesSelector); // replace this with a call to your selector to get all the quizzes in state
  const { quizId } = useParams();
  const quiz = quizzes[quizId];
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [quizKey, setQuizKey] = useState(0);

  if(!quiz) {
    return <Navigate to={ROUTES.quizzesRoute()} replace/>
  }

  const onResult = (isCorrect) => {
    if (isCorrect) {
      setCorrect(prev => prev + 1)
    } else {
      setWrong(prev => prev + 1)
    }
  }

  return (
    <section>
      <h1>{quiz.name}</h1>
      <ul className="cards-list" key={quizKey}>
        {quiz.cardIds.map((id) => (
          <Card key={id} id={id} onResult={onResult} reset={quizKey} />
        ))}
      </ul>
    
      <div className="quiz-footer">
        <button className="restart-btn" onClick={() => {setCorrect(0); setWrong(0); setQuizKey(prev => prev + 1);}}>
          Restart Quiz
        </button>
        <p className="score">
          <span className="score-correct">✔</span> {correct}
          {' | '}
          <span className="score-wrong">✘</span> {wrong}
        </p>
        <Link to={ROUTES.newQuizRoute()} className="button center">
        Create a New Quiz
        </Link>
      </div>
      
    </section>
  );
}
