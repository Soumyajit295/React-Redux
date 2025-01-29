import React, { useContext, useEffect, useState } from 'react';
import QuizContext from '../../Context/QuizContext';
import { Link, useNavigate } from 'react-router-dom';

function MainQuizPage() {
  const [index, setIndex] = useState(0);
  const { questions, loading } = useContext(QuizContext);
  const [answers, setAnswers] = useState([]);
  const [correctAns, setCorrectAns] = useState('');
  const [marks, setMarks] = useState(0);
  const [rightOrWrong, setRightOrWrong] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const navigate = useNavigate();

  function shuffleArray(array) {
    return [...array].sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    if (questions.length > 0 && questions[index]) {
      const options = shuffleArray([...questions[index].incorrect_answers, questions[index].correct_answer]);
      setAnswers(options);
      setCorrectAns(questions[index].correct_answer);
      setRightOrWrong(null);
      setSelectedAnswer(null);
    }
  }, [index, questions]);

  function onNext() {
    if (index < questions.length - 1) {
      setIndex(index + 1);
    } else {
      navigate(`/quiz-result/${marks}`);
    }
  }

  function onPrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function checkAns(ans) {
    if (selectedAnswer === null) { 
      setSelectedAnswer(ans);
      if (ans === correctAns) {
        setRightOrWrong(true);
        setMarks(prev => prev + 1);
      } else {
        setRightOrWrong(false);
      }
    }
  }

  return (
    <>
      {loading ? (
        <div className="text-center text-white text-xl mt-10">Loading...</div>
      ) : (
        <div className="w-full sm:w-1/2 md:w-1/3 bg-gray-600 p-5 mx-auto mt-10 rounded-lg opacity-50">
          <div className="w-full flex justify-end">
            <Link className="px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-500" to="/">
              Close quiz
            </Link>
          </div>

          <div className="w-full mt-5 text-center text-white text-xl">
            {questions.length > 0 ? questions[index]?.question : 'Loading question...'}
          </div>

          <div>
            {answers.length > 0 ? (
              answers.map((answer, idx) => (
                <button
                  onClick={() => checkAns(answer)}
                  key={idx}
                  disabled={selectedAnswer !== null}
                  className={`block w-full p-3 rounded-md mt-4 cursor-pointer transition duration-300
                    ${
                      selectedAnswer === answer
                        ? rightOrWrong
                          ? 'bg-green-600 hover:bg-green-500'
                          : 'bg-red-600 hover:bg-red-500'
                        : 'bg-slate-500 hover:bg-slate-400'
                    } text-white`}
                >
                  {answer}
                </button>
              ))
            ) : (
              <h1 className="text-center text-xl text-white">Loading Options...</h1>
            )}
          </div>

          <div className="w-full flex justify-center mt-5 text-white">
            <p>Marks: {marks}</p>
          </div>

          <div className="w-full flex justify-between mt-5">
            <button
              onClick={onPrev}
              disabled={index === 0}
              className="px-5 py-2 bg-red-600 rounded-lg hover:bg-red-500 text-white cursor-pointer"
            >
              Prev
            </button>
            <button
              onClick={onNext}
              className="px-5 py-2 bg-green-600 rounded-lg hover:bg-green-500 text-white cursor-pointer"
            >
              {index === questions.length - 1 ? `Submit` : `Next`}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default MainQuizPage;
