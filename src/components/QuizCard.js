import React from 'react';

const QuizCard = ({ quizArr, answerClick, currentStep }) => {
  return (
    <>
      {quizArr.map((el, index) => (
        <div key={index} className='answers'>
          {currentStep === index && (
            <>
              <h3>{el.question}</h3>
              <div className='btn-answers'>
                <button className='btn' onClick={() => answerClick(0, index)}>
                  {el.answers[0]}
                </button>
                <button className='btn' onClick={() => answerClick(1, index)}>
                  {el.answers[1]}
                </button>
                <button className='btn' onClick={() => answerClick(2, index)}>
                  {el.answers[2]}
                </button>
                <button className='btn' onClick={() => answerClick(3, index)}>
                  {el.answers[3]}
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default QuizCard;
