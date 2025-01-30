import React from 'react'

function InrButton({onCurrencyChange}) {
  return (
    <button 
    onClick={onCurrencyChange}
    className='w-20 px-5 py-2 bg-orange-600 hover:bg-orange-500 text-slate-100 rounded-lg'>
        INR
    </button>
  )
}

export default InrButton