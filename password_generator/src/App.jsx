import { useState } from 'react'
import './App.css'
import { useCallback } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'

function App() {
  let [length,setLength] = useState(8)
  let [numberAllowed,setNumberAllowed] = useState(false)
  let [characterAllowed,setCharacterAllowed] = useState(false)
  let [password,setPassword] = useState('')

  const inputReference = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if(numberAllowed) string+="0123456789"
    if(characterAllowed) string+="~!@#$%^&*"

    for(let i=1;i<=length;i++){
      let index = Math.floor(Math.random()*string.length+1)
      pass+= string.charAt(index)
    }

    setPassword(pass)

  },[length,numberAllowed,characterAllowed])

  const copyPasswordToClipboard = ()=>{
    inputReference.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,characterAllowed])

  return (
    <>
      <h1 className='text-4xl text-center text-white mb-4'>Password generator</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-8 text-orange-500 bg-gray-800'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          value={password}
          className='outline-none w-full px-3 py-2 bg-white text-slate-800'
          placeholder='password'
          readOnly
          ref={inputReference}
          type="text" 
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>setLength(e.target.value)}
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=>setNumberAllowed((prev)=>!prev)}
            type="checkbox" />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={()=>setCharacterAllowed((prev)=>!prev)}
            type="checkbox" />
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
