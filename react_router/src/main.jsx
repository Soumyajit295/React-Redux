import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Contact from './Components/Contact.jsx'
import Github from './Components/Github.jsx'
import ErrorPage from './Components/ErrorPage.jsx'
import User from './Components/User.jsx'

/* Method 1 to create a router */

// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout/>,
//     children : [
//       {path : '',element : <Home/>},
//       {path : 'about',element : <About/>},
//       {path : 'contact',element : <Contact/>},
//       {path : 'github',element : <Github/>},
//     ]
//   }
// ])

/* Method 2 to create a router */

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='*' element={<ErrorPage/>}/>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='github' element={<Github/>}/>
      <Route path='user/:userId' element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
