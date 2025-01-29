import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import QuizContexProvider from './Context/QuizContextProvider.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Outlet } from 'react-router-dom'
import QuizFormPage from './Components/Pages/QuizFormPage.jsx'
import MainQuizPage from './Components/Pages/MainQuizPage.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<QuizFormPage />} />
      <Route path="quiz" element={<MainQuizPage />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizContexProvider>
      <RouterProvider router={router} />
    </QuizContexProvider>
  </StrictMode>
)
