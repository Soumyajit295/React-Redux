import React, { useState } from 'react'

function Counter() {
  let [count,setCount] = useState(0)

  const addCount = ()=>{
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
  }

  return (
    <div>
        <p>Counter Component</p>
        <p>Count : {count}</p>
        <button onClick={addCount}>Add Count</button>
    </div>
  )
}

export default Counter