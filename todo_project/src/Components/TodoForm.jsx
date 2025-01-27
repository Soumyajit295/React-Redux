import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm() {
  const [todoText,setTodoText] = useState('')
  const {addTodo} = useContext(TodoContext)

  const handleForm = (e)=>{
    e.preventDefault()
    const newTodo = {todo : todoText,completed : false,isEditable : false}
    addTodo(newTodo)
  }

  return (
    <div className="w-full sm:w-3/4 md:w-1/2 p-5 rounded-lg bg-slate-800 mx-auto mt-5">
      <form 
      onSubmit={handleForm}
      className="w-full p-2 border border-gray-800 flex">
        <input
          value={todoText}
          onChange={(e)=>setTodoText(e.target.value)}
          className="border border-gray-200 rounded-l-lg p-2 flex-grow bg-slate-700 placeholder-gray-500 outline-none text-white font-bold"
          type="text"
          placeholder="Enter your task"
          required
        />
        <button className="bg-green-700 text-white py-2 px-5 rounded-r-lg hover:bg-green-800 transition-all transform delay-100 cursor-pointer">
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
