import React from 'react';

function InputBox({
  label,
  currencyOptions = [],
  isAmountInputDisabled = false,
  amount,
  onAmountChange,
  currency,
  onCurrencyChange,
}) {
  return (
    <div className="w-full bg-slate-50 p-4 rounded-lg shadow-md">
      <div className="w-full flex justify-between items-center mb-3">
        <label className="text-xl text-slate-800 font-semibold">{label}</label>
        <p className="text-lg text-slate-800">Currency type</p>
      </div>
      <div className="text-xl flex justify-between items-center space-x-4">
        <input
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          className="outline-none p-3 border border-gray-500 bg-white text-slate-900 rounded-lg font-bold w-1/2"
          disabled={isAmountInputDisabled}
          type="number"
          placeholder="Enter amount"
        />
        <select
          className="border border-gray-500 rounded-lg p-3 w-1/3"
          value={currency}
          onChange={(e) => onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((curr) => (
            <option value={curr} key={curr}>
              {curr.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
