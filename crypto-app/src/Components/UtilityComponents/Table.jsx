import React from "react";

function Table({ cryptos,currentCurrency }) {

  console.log(cryptos)
  return (
    <table className="w-full table-auto overflow-x-auto text-left text-gray-300">
      <thead className="bg-gray-800">
        <tr>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Symbol</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Hight 24h</th>
          <th className="px-4 py-2">Low 24h</th>
          <th className="px-4 py-2">24h Change</th>
        </tr>
      </thead>
      <tbody>
        {cryptos.map((crypto, index) => (
          <tr key={crypto.id} className="border-b border-gray-700">
            
            <td className="px-4 py-2">{crypto.name}</td>
            <td className="px-4 py-2"><img className="w-5" src={crypto.image} alt="" /></td>
            <td className="px-4 py-2">
              {currentCurrency === "inr"
                ? `₹${crypto.current_price}`
                : `$${crypto.current_price}`}
            </td>
            <td className="px-4 py-2">
              {currentCurrency === "inr"
                ? `₹ ${crypto.high_24h}`
                : `$ ${crypto.high_24h}`}
            </td>
            <td className="px-4 py-2">
              {currentCurrency === "inr"
                ? `₹ ${crypto.low_24h}`
                : `$ ${crypto.low_24h}`}
            </td>
            <td className={`px-4 py-2 ${crypto.price_change_percentage_24h > 0 ? `text-green-600` : `text-red-600`}`}>{crypto.price_change_percentage_24h}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
