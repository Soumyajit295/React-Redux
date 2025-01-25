import { useState } from 'react'
import './App.css'
import Counter from './Components/Counter'

function App() {

  let [counter,setCounter] = useState(0)

  const incrementValue = ()=>{
    setCounter(counter+1)
  }

  return (
    <>
      <h2>Counter : {counter}</h2>    
      <button onClick={incrementValue}>Increment</button>
      <Counter/>
    </>
  )
}

export default App
