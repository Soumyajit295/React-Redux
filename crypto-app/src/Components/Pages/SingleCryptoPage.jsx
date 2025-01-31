import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, fetchSingleCryptoDetails } from "../../Redux/Slices/CryptoSlice";
import { useParams } from "react-router-dom";
import InrButton from "../UtilityComponents/InrButton";
import UsdButton from "../UtilityComponents/UsdButton";

function SingleCryptoPage() {
  const { singleCoin } = useParams();
  const dispatch = useDispatch();

  const { singleCrypto, currency } = useSelector((state) => state.crypto);
  const [crypto, setCrypto] = useState({});
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchSingleCryptoDetails(singleCoin)).finally(() => {
      setLoading(false);
    });
  }, [dispatch, singleCoin, currentCurrency]);

  useEffect(() => {
    if (singleCrypto) {
      setCrypto(singleCrypto);
    }
  }, [singleCrypto]);

  const changeToInr = () => {
    dispatch(changeCurrency("inr"));
    setCurrentCurrency("inr");
  };

  const changeToUsd = () => {
    dispatch(changeCurrency("usd"));
    setCurrentCurrency("usd");
  };

  if (loading) {
    return (
      <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white p-10">
        <h1 className="text-slate-200 text-xl text-center">Loading Crypto...</h1>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="w-full flex flex-col justify-center items-center p-5">
        <img
          className="w-1/4 sm:w-1/6 md:w-1/6 lg:w-1/6 xl:w-1/6 h-auto"
          src={crypto.image?.large}
          alt={crypto.id}
        />
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold mt-5">
          {crypto.name}
        </h1>
      </div>
      <div className="flex flex-wrap justify-center items-center space-x-5 space-y-2">
        <h1 className="text-3xl font-semibold text-slate-200">Select Currency</h1>
        <div>
          <InrButton onCurrencyChange={changeToInr} />
          <UsdButton onCurrencyChange={changeToUsd} />
        </div>
      </div>
      <div className="w-full p-5">
        <h1 className="text-slate-200 text-4xl font-semibold mt-5">Coin Details</h1>
        <div>
          <table className="min-w-full bg-slate-800 rounded-lg mt-5">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="p-4 text-left text-white font-semibold">Details</th>
                <th className="p-4 text-left text-white font-semibold">Value</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">Name</td>
                <td className="p-4 text-white">{crypto.name}</td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">Current Price</td>
                <td className="p-4 text-white">
                  {crypto.market_data ? (currency === "inr" ? "₹ " : "$ ") + crypto.market_data.current_price[currency] : "Loading..."}
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">Market Cap</td>
                <td className="p-4 text-white">
                  {crypto.market_data ? (currency === "inr" ? "₹ " : "$ ") + crypto.market_data.market_cap[currency] : "Loading..."}
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">24 Hours High</td>
                <td className="p-4 text-green-500">
                  {crypto.market_data ? (currency === "inr" ? "₹ " : "$ ") + crypto.market_data.high_24h[currency] : "Loading..."}
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">24 Hours Low</td>
                <td className="p-4 text-red-500">
                  {crypto.market_data ? (currency === "inr" ? "₹ " : "$ ") + crypto.market_data.low_24h[currency] : "Loading..."}
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">Price Change (24h)</td>
                <td className={`p-4 ${crypto.market_data?.price_change_24h_in_currency[currency] > 0 ? "text-green-500" : "text-red-500"}`}>
                  {crypto.market_data ? (currency === "inr" ? "₹ " : "$ ") + crypto.market_data.price_change_24h_in_currency[currency] : "Loading..."}
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">Price Change % (24h)</td>
                <td className={`p-4 ${crypto.market_data?.market_cap_change_percentage_24h > 0 ? "text-green-500" : "text-red-500"}`}>
                  {crypto.market_data ? crypto.market_data.market_cap_change_percentage_24h : "Loading..."} %
                </td>
              </tr>
              <tr className="border-b border-slate-700 hover:bg-slate-700">
                <td className="p-4 text-white">Total Supply</td>
                <td className="p-4 text-white">{crypto.market_data ? crypto.market_data.total_supply : "Loading..."}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SingleCryptoPage;
