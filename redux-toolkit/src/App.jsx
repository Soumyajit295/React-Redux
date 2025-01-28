import { useSelector } from 'react-redux'
import TodoItem from './components/TodoComponent'
import TodoForm from './components/TodoForm'

function App() {
  const {todos} = useSelector(state=>state.todo)

  return (
    <>
      <TodoForm/>
      {
        todos.length > 0 ? todos.map((todo)=>(
          <TodoItem todo={todo}/>
        )) : (
          <div className="w-1/3 mx-auto mt-5 p-4 bg-gray-800 rounded-lg shadow-md text-gray-100 mb-3">
            <h1 className='text-xl text-center text-slate-200'>No Todo present</h1>
          </div>
        )
      }
    </>
  )
}

export default App
