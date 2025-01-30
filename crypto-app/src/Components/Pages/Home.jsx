import React, { useEffect } from "react";
import hero from "../../assets/Hero.png";
import ShowCase from "../UtilityComponents/ShowCase";
import  {useDispatch, useSelector } from 'react-redux'
import {fetchCoins} from '../../Redux/Slices/CryptoSlice'

function Home() {
  const {currency} = useSelector(state=>state.crypto)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchCoins(currency))
  },[])

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-black">
        <div className="flex flex-col sm:flex-row">
        {/* Left Div */}
        <div className="w-full sm:w-1/2 p-10 flex flex-col space-y-5 justify-center items-center sm:items-start text-center sm:text-left">
            <h1 className="text-6xl font-bold text-slate-200 ">
            Buy & <span className="text-orange-600">Sell Your</span>
            </h1>
            <h1 className="text-4xl text-slate-200 font-semibold">Digital Assets</h1>
            <h1 className="text-4xl text-slate-200 font-semibold">and Get Updates</h1>
            <h1 className="text-6xl font-bold text-slate-200">
            on Crypto<span className="text-orange-600">X</span>
            </h1>
            <button className="px-6 py-5 bg-orange-600 rounded-lg hover:bg-orange-500 text-slate-200 cursor-pointer w-1/2 text-xl mt-5">
            Visit Market
            </button>
        </div>

        {/* Right Div (Hidden on Small Screens) */}
        <div className="w-1/2 p-5 flex items-center justify-center hidden sm:flex">
            <img src={hero} alt="image" className="max-w-full h-auto" />
        </div>
        </div>
        <ShowCase/>
    </div>
  );
}

export default Home;
