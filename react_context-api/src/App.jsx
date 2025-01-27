import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvide from './context/UserContextProvide'

function App() {
  return (
    <UserContextProvide>
      <h1 className='text-white text-2xl mb-5 text-center mt-10'>React Context API</h1>
      <Login/>
      <Profile/>
    </UserContextProvide>
  )
}

export default App
