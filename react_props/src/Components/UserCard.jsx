import React from 'react'
import './UserCard.css'

function UserCard({user}) {
  return (
    <div className='container'>
        <p>Name : {user.name}</p>
        <p>Age : {user.age}</p>
    </div>
  )
}

export default UserCard