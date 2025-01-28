import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Slices/todoSlices";

const TodoForm = () => {
  const [text,setText] = useState('')
  const dispatch = useDispatch()

  const handleFormSubmit = (e)=>{
    e.preventDefault()
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="p-6 w-full max-w-sm bg-gray-800 rounded-2xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-100 mb-4 text-center">Add a Todo</h1>
        <form 
        onSubmit={handleFormSubmit}
        className="flex flex-col gap-4">
          <input
            value={text}
            onChange={(e)=>setText(e.target.value)}
            type="text"
            placeholder="Enter your todo"
            className="w-full p-3 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all"
          >
            Add Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
