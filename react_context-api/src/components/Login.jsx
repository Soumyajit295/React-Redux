import React, { useState } from 'react'
import { useContext } from 'react'
import UserContext from '../context/Usercontext'

function Login() {
  let [userName,setUserName] = useState('')
  let [password,setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  console.log(setUser)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setUser({userName,password})
  }

  return (
    <div>
        <form 
        onSubmit={handleSubmit}
        className='w-1/3 border p-5 bg-slate-400 opacity-100 mx-auto rounded-2xl'>
            <label htmlFor="">UserName</label>
            <br />
            <input 
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            className='border border-gray-100 w-full p-2 rounded-lg bg-slate-100 mt-2 mb-2'
            type="text" />
            <label htmlFor="">Password</label>
            <input 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className='border border-gray-100 w-full p-2 rounded-lg bg-slate-100 mt-2'
            type="password" />
            <div className='w-full p-2 flex justify-center items-center mt-2'>
                <button className='px-5 py-2 bg-blue-600 text-white rounded-lg cursor-pointer'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login