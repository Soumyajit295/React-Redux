import React, { useEffect, useState } from "react";
import InrButton from "../UtilityComponents/InrButton";
import UsdButton from "../UtilityComponents/UsdButton";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency, fetchCoins } from "../../Redux/Slices/CryptoSlice";
import Card from "../UtilityComponents/Card";
import Table from "../UtilityComponents/Table";

function MarketPage() {
  const [ui, setUi] = useState("grid");  // Default is grid view
  const [inputCrypto, setInputCrypto] = useState("");
  const dispatch = useDispatch();

  const { cryptos, currency } = useSelector((state) => state.crypto);
  const [currentCurrency, setCurrentCurrency] = useState(currency);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchCoins(currentCurrency));
  }, [currentCurrency, dispatch]);

  const filteredCryptos = cryptos.filter((crypto) =>
    crypto.name.toLowerCase().includes(inputCrypto.toLowerCase())
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedCryptos = filteredCryptos.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredCryptos.length / itemsPerPage);

  const changeToInr = () => {
    dispatch(changeCurrency("inr"));
    setCurrentCurrency("inr");
  };

  const changeToUsd = () => {
    dispatch(changeCurrency("usd"));
    setCurrentCurrency("usd");
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="w-full flex pt-5">
        <div
          className={`w-1/2 text-center cursor-pointer pb-2 ${
            ui === "grid" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => setUi("grid")}
        >
          <h1 className="text-2xl font-semibold">Grid</h1>
        </div>
        <div
          className={`w-1/2 text-center cursor-pointer pb-2 ${
            ui === "list" ? "border-b-2 border-blue-600" : ""
          }`}
          onClick={() => setUi("list")}
        >
          <h1 className="text-2xl font-semibold">List</h1>
        </div>
      </div>

      <div className="w-full flex flex-wrap justify-evenly pt-5 p-2 space-y-2">
        <h1 className="text-slate-200 text-3xl font-semibold">Crypto Market</h1>
        <div className="flex flex-wrap justify-center items-center space-x-3 space-y-2">
          <input
            value={inputCrypto}
            onChange={(e) => setInputCrypto(e.target.value)}
            className="p-2 bg-slate-100 text-slate-900 border-gray-800 rounded-lg w-72 focus:ring-2 focus:ring-blue-600 outline-none mt-1"
            placeholder="Search Your Crypto"
            type="text"
          />
        </div>
        <div>
          <InrButton onCurrencyChange={changeToInr} />
          <UsdButton onCurrencyChange={changeToUsd} />
        </div>
      </div>

      <div className="w-full p-5">
        {ui === "grid" ? (
          // Render Grid of Cards
          <div className="w-full p-5 flex flex-wrap justify-center space-y-3 gap-5">
            {displayedCryptos.length > 0 ? (
              displayedCryptos.map((crypto) => (
                <Card key={crypto.id} crypto={crypto} currentCurrency={currentCurrency} />
              ))
            ) : (
              <p className="text-center text-gray-400 text-lg">No cryptos found...</p>
            )}
          </div>
        ) : (
          // Render Table Layout
          <div className="overflow-x-auto p-5">
            {displayedCryptos.length > 0 ? (
              <Table cryptos={displayedCryptos} currentCurrency={currentCurrency}/>
            ) : (
              <p className="text-center text-gray-400 text-lg">No cryptos found...</p>
            )}
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="w-full flex justify-center space-x-3 mt-5 p-5">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50"
          >
            Prev
          </button>
          <span className="text-xl font-semibold">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 rounded-lg disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default MarketPage;
