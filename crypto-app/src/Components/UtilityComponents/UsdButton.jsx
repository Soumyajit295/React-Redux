import React from 'react'

function UsdButton({onCurrencyChange}) {
    return (
      <button 
      onClick={onCurrencyChange}
      className='w-20 px-5 py-2 bg-orange-600 ml-5 hover:bg-orange-500 text-slate-100 rounded-lg'>
          USD
      </button>
    )
  }

export default UsdButton