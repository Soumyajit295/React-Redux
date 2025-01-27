import React from 'react'
import { useContext } from 'react'
import TodoContext from '../context/TodoContext'
import SingleTodo from './SingleTodo'

function TodoContainer() {
  const {todos} = useContext(TodoContext)

  return (
    <div className="w-full sm:w-3/4 md:w-1/2 p-5 rounded-lg bg-slate-800 mx-auto mt-5">
        {
            todos.length < 1 ? (
                <h1 className='text-2xl text-center text-slate-100'>No Todo is present now</h1>
            ) : (
                todos.map((todo)=>(
                    <SingleTodo todo={todo} key={todo.id}/>
                ))
            )
        }
    </div>
  )
}

export default TodoContainer