import React, { useContext, useEffect } from "react";
import QuizContex from "../Context/QuizContext";
import { Link, useParams } from "react-router-dom";

function ResultPage() {
  const quiz = JSON.parse(localStorage.getItem('quizes'))

  const {result} = useParams()

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 bg-gray-600 p-5 mx-auto mt-10 rounded-lg opacity-50">
      <div className="w-full">
        <h1 className="text-slate-100 text-center text-xl">
          You Get {result}/{quiz.length}
        </h1>
      </div>
      <div className="w-full flex justify-center items-center mt-3">
        <Link
          className="px-6 py-2 bg-red-800 text-slate-100 rounded-lg hover:bg-red-500"
          to="/"
        >
          Close quiz
        </Link>
      </div>
    </div>
  );
}

export default ResultPage;
