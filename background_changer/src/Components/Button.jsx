import React from 'react'

function Button({button , handleBackGroundColor}) {
  const {btnTextColor,btnColor,btnText} = button
  return (
    <button 
    onClick={()=>handleBackGroundColor(button)}
    className={`px-5 py-2 rounded-2xl ${btnTextColor} ${btnColor} w-fit cursor-pointer`}>
        {btnText}
    </button>
  )
}

export default Button