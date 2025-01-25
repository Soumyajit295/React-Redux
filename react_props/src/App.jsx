import './App.css'
import UserCard from './Components/UserCard'

function App() {
  
  let users = [
    {name : "Soumyajit",age : 22},
    {name : "Sumesh",age : 24}, 
    {name : "Ritesh",age : 25},
    {name : "Ravi",age : 28}
  ]

  return (
    <>
      <div className='root-container'>
        {
          users.map((user,key)=><UserCard user={user} key={key}/>)
        }
      </div>
    </>
  )
}

export default App
