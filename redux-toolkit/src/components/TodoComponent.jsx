import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../Redux/Slices/todoSlices";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(false)
  const [updatedText, setUpdatedText] = useState(todo.text)

  const onDelete = (id) => {
    dispatch(removeTodo(id))
  };

  
  const onEdit = () => {
    if(isEditing){
        dispatch(editTodo({id : todo.id,text : updatedText}))
    }
    setIsEditing(!isEditing)
  };

  return (
    <div className="w-1/3 mx-auto mt-5 flex justify-between items-center p-4 bg-gray-800 rounded-lg shadow-md text-gray-100 mb-3">
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={(e) => setUpdatedText(e.target.value)}
          className="w-full mr-4 p-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      ) : (
        <span className="text-lg">{todo.text}</span>
      )}

      <div className="flex gap-2">
        <button
          onClick={onEdit}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
