import React, { useEffect, useState } from "react";
import InrButton from "./InrButton";
import UsdButton from "./UsdButton";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, fetchCoins } from "../../Redux/Slices/CryptoSlice";

function ShowCase() {
  const { currency, showcaseCrypto } = useSelector((state) => state.crypto);
  const [currentCurrency, setCurrentCurrency] = useState(currency);

  const dispatch = useDispatch();

  const changeToInr = () => {
    changeCurrency("inr");
    setCurrentCurrency("inr");
  };

  const changeToUsd = () => {
    changeCurrency("usd");
    setCurrentCurrency("usd");
  };

  useEffect(() => {
    dispatch(fetchCoins(currentCurrency));
  }, [currency,dispatch,currentCurrency]);

  return (
    <div className="w-full p-2">
      <div className="w-full flex flex-col justify-center items-center space-y-5">
        <h1 className="text-4xl font-semibold text-slate-200">
          Top <span className="text-orange-600">Cryptos</span>
        </h1>
        <div>
          <InrButton onCurrencyChange={changeToInr} />
          <UsdButton onCurrencyChange={changeToUsd} />
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-5 p-3">
        {showcaseCrypto.length > 0 ? (
          showcaseCrypto.map((crypto, idx) => (
            <div
              key={idx}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-gray-700 rounded-lg"
            >
              <div className="w-full flex justify-center p-3">
                <img className="w-10" src={crypto.image} alt="image" />
              </div>
              <div className="w-full flex flex-col space-y-5 justify-center items-center p-3">
                <h1 className="text-slate-200 text-xl font-semibold">
                  {crypto.name}
                </h1>
                <h1 className="text-slate-200 text-xl font-semibold">
                  Price : {currentCurrency === "inr" ? `₹ ` : `$ `}{" "}
                  {crypto.current_price}
                </h1>
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-slate-100 text-center text-xl">Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default ShowCase;
