import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {
  const [data,setData] = useState({})

  useEffect(()=>{
    fetch(`https://api.github.com/users/soumyajit295`)
    .then((res)=>res.json())
    .then((data)=>setData(data))
  },[])

  return (
    <div className='w-full'>
        <div className='w-full p-5 flex justify-center items-center'>
            <h1>{data?.login} || {data.followers} followers</h1>
        </div>
        <div className='w-full p-3 flex justify-center items-center'>
            <img src={data?.avatar_url} alt="git profile picture" className='w-25 rounded-2xl'/>
        </div>
    </div>
  )
}

export default Github