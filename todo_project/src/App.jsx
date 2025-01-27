import './App.css'
import TodoContainer from './Components/TodoContainer'
import TodoForm from './Components/TodoForm'
import TodoContextProvider from './context/TodoContextProvider'

function App() {
  return (
    <TodoContextProvider>
      <h1 className='text-3xl text-slate-300 text-center mt-5'>Todo Manager</h1>
      <TodoForm/>
      <TodoContainer/>
    </TodoContextProvider>
  )
}

export default App
