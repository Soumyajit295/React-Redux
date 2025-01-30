import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './Redux/Store.js'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/UtilityComponents/Layout.jsx'
import Home from './Components/Pages/Home.jsx'
import MarketPage from './Components/Pages/MarketPage.jsx'
import SingleCryptoPage from './Components/Pages/SingleCryptoPage.jsx'

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='market' element={<MarketPage/>}/>
      <Route path='/crypto/:singleCoin' element={<SingleCryptoPage/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
