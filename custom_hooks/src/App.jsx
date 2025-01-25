import { useState } from 'react';
import InputBox from './Components/InputBox';
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { useEffect } from 'react';

function App() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurreny] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [calculatedAnswer,setCalculatedAnswer] = useState(0)

  const currencyInfo = useCurrencyInfo(fromCurrency);
  const currencyOptions = Object.keys(currencyInfo?.rates || {});

  const onAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  const onFromCurrencyChange = (newCurrency) => {
    setFromCurreny(newCurrency);
  };

  const onToCurrencyChange = (newCurrency) =>{
    setToCurrency(newCurrency)
  }

  const swapCurrency = () =>{
    let temp = fromCurrency
    setFromCurreny(toCurrency)
    setToCurrency(temp)
    let tempAns = calculatedAnswer
    setCalculatedAnswer(amount)
    setAmount(tempAns)
  };

  const calculateCurrencyValue = () =>{
    let ans = (Number(amount)* Number(currencyInfo.rates[toCurrency]))
    setCalculatedAnswer(ans)
  }

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
        }}
        className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      >
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 rounded-lg p-5 bg-gray-400 shadow-lg opacity-80">
          <InputBox
            label="From"
            currencyOptions={currencyOptions}
            isAmountInputDisabled={false}
            amount={amount}
            onAmountChange={onAmountChange}
            currency={fromCurrency}
            onCurrencyChange={onFromCurrencyChange}
          />
          <div className='w-full flex justify-center items-center p-5'>
            <button 
            onClick={swapCurrency}
            className='px-5 py-2 text-white bg-blue-600 hover:bg-blue-700 transition-all transform delay-100 cursor-pointer rounded-lg mx-auto'>Swap currency</button>
          </div>
          <InputBox
            label="To"
            currencyOptions={currencyOptions}
            isAmountInputDisabled={true}
            amount={calculatedAnswer}
            onAmountChange={()=>{}}
            currency={toCurrency}
            onCurrencyChange={onToCurrencyChange}
          />
          <div className='w-full'>
          <button 
          onClick={calculateCurrencyValue}
          className=' w-full px-5 py-2 bg-blue-600 text-white mt-4 rounded-lg hover:bg-blue-700 transition-all transform delay-100 cursor-pointer'>Convert {fromCurrency} to {toCurrency}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
