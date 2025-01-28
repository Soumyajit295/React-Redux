import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos : []
}

const todoSlice = createSlice({
    name : 'todo',
    initialState : initialState,
    reducers : {
        addTodo : (state,action)=>{
            const newTodo = {id : Date.now(),text : action.payload}
            state.todos.push(newTodo)
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        editTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>todo.id === action.payload.id ? {...todo,text : action.payload.text} : todo)
        },
    }
})

export const {addTodo,removeTodo,editTodo} = todoSlice.actions

export default todoSlice.reducer