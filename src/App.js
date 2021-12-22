import { useState } from 'react';
import QuizCard from './components/QuizCard';
import './App.css';

let quiz = [
  {
    question: 'Kuriais metais krikštatėvis buvo išleistas pirmą kartą?',
    answers: ['1993', '1852', '1662', '1972'],
    correct: 3,
  },
  {
    question:
      'Kuris aktorius pelnė geriausią aktoriaus Oskarą už filmus „Filadelfija“ (1993) ir „Forrest Gump“ (1994)?',
    answers: ['Jonas Bulijonas', 'Tomas Kukuruzas', 'Tom Hanks', 'Mikas plikas'],
    correct: 2,
  },
  {
    question:
      'Kiek savarankiškų komizionų padarė Alfredas Hitchcockas savo filmuose 1927–1976 metais - 33, 35 ar 37?',
    answers: ['12', '37', '100', '2'],
    correct: 1,
  },
  {
    question:
      'Kuris 1982 m. Filmas buvo labai gerbėjų sutiktas dėl meilės tarp jauno, tėvo neturinčio priemiesčio berniuko ir pasiklydusio, geranoriško bei namuose gyvenančio svečio iš kitos planetos vaizdavimo?',
    answers: ['IR Nežemiškas', 'Gelbėtojai', 'Terminatorius', 'Titanikas'],
    correct: 0,
  },
  {
    question: 'Kuri aktorė vaidino Mary Poppins 1964 m. Filme „Mary Poppins“?',
    answers: ['Andželina joly', ' Julie Andrews', 'Karen Gillan', 'Lucy Liu'],
    correct: 1,
  },
];

function App() {
  const [getPointCounter, setPointcounter] = useState(0);
  const [getPage, setPage] = useState(1);
  const [getCurrentQuestionStep, setCurrentQuestionStep] = useState(0);

  function answerClick(answerIndex, questionindex) {
    if (answerIndex === quiz[questionindex].correct) {
      setPointcounter(getPointCounter + 1);
    }

    let nextstep = Number(questionindex) + 1;
    if (nextstep < quiz.length) {
      setCurrentQuestionStep(nextstep);
    } else {
      setPage(3);
    }
  }

  function onClickStart() {
    setPage(2);
  }

  function onClickEnd() {
    setCurrentQuestionStep(0);
    setPage(1);
  }

  return (
    <div className='container'>
      {getPage === 1 && (
        <div id='start-page'>
          <h1>Take the quiz.</h1>
          <h3>Whenever, you want.</h3>
          <button className='btn' onClick={onClickStart}>
            Begin
          </button>
        </div>
      )}

      {getPage === 2 && (
        <QuizCard quizArr={quiz} answerClick={answerClick} currentStep={getCurrentQuestionStep} />
      )}

      {getPage === 3 && (
        <div id='last-page'>
          <h1>Game Over.</h1>
          <h3>You did {getPointCounter} out of 5!</h3>
          <button className='btn' onClick={onClickEnd}>
            Retry
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
