import React, { useState, useRef, useContext } from "react";
import TodoContext from "../context/TodoContext";

function SingleTodo({ todo }) {
  const [editableText, setEditableText] = useState(todo.todo);
  const { setTodos, updateTodo, deleteTodo, checkComplete } = useContext(TodoContext);

  const toggleButton = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, isEditable: !prevTodo.isEditable } : prevTodo
      )
    );
  };

  const updateText = (id) => {
    if (editableText) {
      updateTodo(id, editableText);
    }
  };

  return (
    <div className={`w-full p-2 flex flex-wrap rounded-lg mb-4 hover:bg-slate-200 transition-all transform delay-100 cursor-pointer ${todo.completed ? `bg-green-200` : `bg-slate-300`}`}>
      <div className="w-1/2 p-1 flex items-center space-x-2">
        <input
          type="checkbox"
          checked={todo.completed} 
          onChange={() => checkComplete(todo.id)}
        />
        {todo.isEditable ? (
          <div className="w-full">
            <input
              className="w-full border border-gray-500 px-1 text-lg font-semibold focus:ring-2 focus:ring-blue-600"
              value={editableText}
              onChange={(e) => setEditableText(e.target.value)}
              type="text"
            />
          </div>
        ) : (
          <h1 className={`text-lg font-semibold ${todo.completed && `line-through`}`}>{todo.todo}</h1>
        )}
      </div>
      <div className="w-1/2 flex justify-end space-x-2">
        {todo.isEditable ? (
          <button
            
            onClick={() => { toggleButton(todo.id); updateText(todo.id); }}
            className="px-5 py-2 bg-blue-700 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-all transform delay-100"
          >
            Save
          </button>
        ) : (
          <button
            disabled={todo.completed}
            onClick={() => toggleButton(todo.id)}
            className={`px-5 py-2 text-white rounded-lg hover:bg-green-600 transition-all transform delay-100 ${todo.completed ? `bg-green-300 cursor-default` : `bg-green-700 cursor-pointer`}`}
          >
            Edit
          </button>
        )}
        <button
          disabled={todo.completed}
          onClick={() => deleteTodo(todo.id)}
          className={`px-5 py-2 text-white rounded-lg hover:bg-red-600 transition-all transform delay-100 ${todo.completed ? `bg-red-200 cursor-default` : `bg-red-700 cursor-pointer`}`}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default SingleTodo;
