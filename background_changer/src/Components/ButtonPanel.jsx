import React from 'react'

function ButtonPanel({children}) {
  return (
    <div className='w-2/3 bg-slate-300 p-5 rounded-2xl absolute bottom-5 left-60 flex justify-evenly'>
        {children}
    </div>
  )
}

export default ButtonPanel