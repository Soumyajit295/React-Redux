import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userId} = useParams()
  return (
    <div>
        <h1 className='text-center text-2xl p-5'>UserId : {userId}</h1>
    </div>
  )
}

export default User