import React, { useEffect, useState, MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard';
import { Difficulty, fetchQuizQuestions, QuestionState } from './API';
import Score from './components/Score';



const TOTAL_QUESTIONS = 10

const App = () => {

  const [loading, setLoading] = useState(false);
  const [gameOver, setGameOver] = useState(true);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnwsers, setUserAnwsers] = useState([]);
  const [score, setScore] = useState(0);



  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const questions = await fetchQuizQuestions(10, Difficulty.HARD)
    setQuestions(questions)
  }

  useEffect(() => {
    setLoading(false)
  }, [questions])

  const checkAnwser = (e: MouseEvent) => {

  }

  const nextQuestion = (e: MouseEvent<HTMLButtonElement>) => {
    setNumber(number+1)
  }

  return (
    <div className="app-container">
      <h1>REACT QUIZ</h1>
      <button className="start-btn" onClick={startTrivia}>
        Start
      </button>

      {!gameOver && <Score score={score} /> }

      {loading &&
        <p>Loading Questions ...</p>
      }

      {questions[number] &&
        <QuestionCard
          anwsers={questions ? questions[number].anwsers : []}
          questionNr={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          userAnwser={userAnwsers ? userAnwsers[number] : undefined}
          callback={checkAnwser}
        />
      }


      {questions[number+1] && 
        <button className="next-btn" onClick={nextQuestion}> 
          Next question
        </button>
      }
    </div>
  )
}

export default App;
