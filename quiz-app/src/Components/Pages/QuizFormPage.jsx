import React, { useEffect, useState } from "react";
import { useContext } from "react";
import QuizContex from "../../Context/QuizContext";
import { Route, useNavigate } from "react-router-dom";

function QuizFormPage() {
  const [noOfQuestion,setNoOfQuestion] = useState('')
  const [categoryQuestion,setCategoryOfQuestion] = useState('')
  const [difficultyQuestion,setDifficultyQuestion] = useState('')
  const [typeQuestion,setTypeQuestion] = useState('') 

  const {fetchQuestion,setLoading} = useContext(QuizContex)
  const navigate = useNavigate()

  const categories = [
    { value: "10", text: "Entertainment: Books" },
    { value: "11", text: "Entertainment: Film" },
    { value: "12", text: "Entertainment: Music" },
    { value: "9", text: "General Knowledge" },
    { value: "13", text: "Entertainment: Musicals & Theatres" },
    { value: "14", text: "Entertainment: Television" },
    { value: "15", text: "Entertainment: Video Games" },
    { value: "16", text: "Entertainment: Board Games" },
    { value: "17", text: "Science & Nature" },
    { value: "18", text: "Science: Computers" },
    { value: "19", text: "Science: Mathematics" },
    { value: "20", text: "Mythology" },
    { value: "any", text: "Any Category" },
    { value: "21", text: "Sports" },
    { value: "22", text: "Geography" },
    { value: "23", text: "History" },
    { value: "24", text: "Politics" },
    { value: "25", text: "Art" },
    { value: "26", text: "Celebrities" },
    { value: "27", text: "Animals" },
    { value: "28", text: "Vehicles" },
    { value: "29", text: "Entertainment: Comics" },
    { value: "30", text: "Science: Gadgets" },
    { value: "31", text: "Entertainment: Japanese Anime & Manga" },
    { value: "32", text: "Entertainment: Cartoon & Animations" },
  ];


  const handleForm = (e) => {
    e.preventDefault();
    fetchQuestion(noOfQuestion,categoryQuestion,difficultyQuestion,typeQuestion)
    navigate('/quiz'); 
  };

  useEffect(()=>{
    setLoading(true)
    localStorage.setItem('quizes',JSON.stringify([]))
  },[])
  

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 bg-gray-600 p-5 mx-auto mt-10 rounded-lg opacity-50">
      <form onSubmit={handleForm}>
        <h1 className="text-slate-200 text-center text-xl mb-5">
          Quiz Configuration
        </h1>

        {/* Number of Questions */}
        <label className="text-slate-300">Number of Questions</label>
        <br />
        <select
          required
          className="w-full bg-slate-200 p-2 rounded-lg mt-2 mb-2"
          onChange={(e)=>setNoOfQuestion(e.target.value)}
          name="numberOfQuestion"
          value={noOfQuestion}
        >
          <option value="">Select number of questions</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>

        {/* Quiz Category */}
        <label className="text-slate-300">Quiz Category</label>
        <br />
        <select
          required
          className="w-full bg-slate-200 p-2 rounded-lg mt-2 mb-2"
          onChange={(e)=>setCategoryOfQuestion(e.target.value)}
          name="categoryOfQuestion"
          value={categoryQuestion}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category.value} value={category.value}>
              {category.text}
            </option>
          ))}
        </select>

        {/* Quiz Difficulty */}
        <label className="text-slate-300">Quiz Difficulty</label>
        <br />
        <select
          required
          className="w-full bg-slate-200 p-2 rounded-lg mt-2 mb-2"
          onChange={(e)=>setDifficultyQuestion(e.target.value)}
          name="difficultyOfQuestion" 
          value={difficultyQuestion}
        >
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>

        {/* Quiz Type */}
        <label className="text-slate-300">Quiz Type</label>
        <br />
        <select
          required
          className="w-full bg-slate-200 p-2 rounded-lg mt-2 mb-2"
          onChange={(e)=>setTypeQuestion(e.target.value)}
          name="typeOfQuestion"
          value={typeQuestion}
        >
          <option value="">Select Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </select>
        
        <div className="w-full flex justify-center mt-5">
        <button className="px-6 py-2 text-slate-100 bg-blue-600 rounded-lg hover:bg-blue-500 cursor-pointer">
          Start Quiz
        </button>
        </div>
      </form>
    </div>
  );
}

export default QuizFormPage;
