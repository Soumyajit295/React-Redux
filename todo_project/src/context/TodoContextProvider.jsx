import { useState, useEffect } from "react";
import TodoContext from "./TodoContext";

const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState(() => {
        const storedTodos = localStorage.getItem('todos');
        return storedTodos ? JSON.parse(storedTodos) : []; // Check for null first
    });

    const addTodo = (todo) => {
        const newTodo = { ...todo, id: Date.now() };
        setTodos((prev) => [...prev, newTodo]);
    };

    const updateTodo = (id, newTodoText) => {
        setTodos((prevTodos) =>
            prevTodos.map((prevTodo) =>
                prevTodo.id === id ? { ...prevTodo, todo: newTodoText } : prevTodo
            )
        );
    };

    const deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id !== id));
    };

    const checkComplete = (id) => {
        setTodos((prevTods) => prevTods.map((prevTodo)=>prevTodo.id === id ? {...prevTodo,completed : !prevTodo.completed} : prevTodo))
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    return (
        <TodoContext.Provider value={{ todos,setTodos, addTodo, updateTodo, deleteTodo ,checkComplete}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
