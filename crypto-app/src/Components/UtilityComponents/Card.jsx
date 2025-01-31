import React from "react";
import {useNavigate} from 'react-router-dom'
function Card({ crypto, currentCurrency }) {
  const navigate = useNavigate()
  return (
    <div
    onClick={()=>navigate(`/crypto/${crypto.id}`)}
    key={crypto.id} className="p-4 bg-gray-800 rounded-lg w-60 flex flex-col justify-between min-h-full hover:bg-gray-900 cursor-pointer">
      <div className="w-full flex items-center p-2 gap-3">
        <img className="w-14 h-14 rounded-full" src={crypto.image} alt="image" />
        <h2 className="text-xl font-bold truncate">{crypto.name}</h2>
      </div>

      <p className="text-sm text-gray-400 text-center mb-3">{crypto.symbol.toUpperCase()}</p>

      <div className="w-full p-2 flex flex-col space-y-2">
        <p className="text-lg font-semibold">
          Current Price: {currentCurrency === "inr" ? `₹ ` : `$ `}
          <span className="text-yellow-400">{crypto.current_price}</span>
        </p>
        <p className="text-lg font-semibold">
          24h High: {currentCurrency === "inr" ? `₹ ` : `$ `}
          <span className="text-green-400">{crypto.high_24h}</span>
        </p>
        <p className="text-lg font-semibold">
          24h Low: {currentCurrency === "inr" ? `₹ ` : `$ `}
          <span className="text-red-400">{crypto.low_24h}</span>
        </p>
        <p className="text-lg font-semibold">
          24h Change: {currentCurrency === "inr" ? `₹ ` : `$ `}
          <span className={`font-bold ${crypto.price_change_percentage_24h < 0 ? "text-red-400" : "text-green-400"}`}>
            {crypto.price_change_percentage_24h} %
          </span>
        </p>
      </div>
    </div>
  );
}

export default Card;
