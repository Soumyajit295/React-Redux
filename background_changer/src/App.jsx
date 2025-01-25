import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonPanel from './Components/ButtonPanel'
import Button from './Components/Button'

function App() {
  let [bgColor,setBgColor] = useState('bg-red-700')

  let buttons = [
    {btnColor : 'bg-red-700',btnTextColor:'text-white',btnText:'Red'},
    {btnColor : 'bg-green-700',btnTextColor:'text-white',btnText:'Green'},
    {btnColor : 'bg-blue-700',btnTextColor:'text-white',btnText:'Blue'},
    {btnColor : 'bg-gray-700',btnTextColor:'text-white',btnText:'Gray'},
    {btnColor : 'bg-yellow-700',btnTextColor:'text-slate-900',btnText:'Yellow'},
    {btnColor : 'bg-pink-700',btnTextColor:'text-slate-900',btnText:'Pink'},
    {btnColor : 'bg-purple-700',btnTextColor:'text-white',btnText:'Purple'},
    {btnColor : 'bg-white',btnTextColor:'text-slate-900',btnText:'White'},
    {btnColor : 'bg-slate-900',btnTextColor:'text-white',btnText:'Black'},
  ]

  const handleBackGroundColor = (button)=>{
    setBgColor(button.btnColor)
  }
  return (
    <>
      <div className={`w-full h-screen ${bgColor} relative transition-all transform delay-300`}>
        <ButtonPanel>
          {
            buttons.map((button,key)=><Button button={button} key={key} handleBackGroundColor={handleBackGroundColor}/>)
          }
        </ButtonPanel>
      </div>
    </>
  )
}

export default App
