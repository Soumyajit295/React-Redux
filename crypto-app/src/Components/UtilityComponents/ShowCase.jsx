import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoins } from "../../Redux/Slices/CryptoSlice";
import InrButton from "./InrButton";
import UsdButton from "./UsdButton";
import { motion, AnimatePresence } from "framer-motion";

function ShowCase() {
  const dispatch = useDispatch();
  const { showcaseCrypto, loading, error } = useSelector((state) => state.crypto);
  const [currency, setCurrency] = useState("inr");
  const [isFetching, setIsFetching] = useState(false);

  const changeCurrency = (newCurrency) => {
    if (currency !== newCurrency) {
      setIsFetching(true);
      setTimeout(() => {
        setCurrency(newCurrency);
      }, 300);
    }
  };

  useEffect(() => {
    if (isFetching) {
      dispatch(fetchCoins(currency)).then(() => setIsFetching(false));
    }
  }, [currency, dispatch, isFetching]);

  return (
    <div className="w-full text-center text-slate-200">
      <h1 className="text-2xl">Top Crypto</h1>
      <div className="w-full flex justify-center items-center p-2 gap-4">
        <InrButton onCurrencyChange={() => changeCurrency("inr")} />
        <UsdButton onCurrencyChange={() => changeCurrency("usd")} />
      </div>

      <div className="w-full flex p-5 gap-5 justify-center flex-wrap relative">
        <AnimatePresence mode="sync">
          {isFetching || loading ? (
            <motion.h2
              key="loading"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute text-center text-slate-200 text-2xl"
            >
              Loading...
            </motion.h2>
          ) : error ? (
            <motion.h2
              key="error"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute text-center text-red-500 text-2xl"
            >
              Error: {error.message}
            </motion.h2>
          ) : (
            showcaseCrypto.map((crypto, index) => (
              <motion.div
                key={crypto.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide in from left & right alternately
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Slide out in reverse
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-1/3 bg-gray-600 opacity-50 p-5 rounded-lg"
              >
                <div className="w-full flex flex-col justify-center items-center mb-2">
                  <img className="w-20" src={crypto.image} alt="crypto_image" />
                  <h1>{crypto.name}</h1>
                </div>
                <div className="flex flex-col space-y-2 justify-center">
                  <h1>Price: {currency === 'inr' ? `₹` : `$`}{crypto.current_price}</h1>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default ShowCase;
