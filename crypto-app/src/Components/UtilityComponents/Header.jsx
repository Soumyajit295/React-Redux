import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="w-full flex justify-between items-center p-5 bg-slate-900">
      <div>
        <h1 className="text-3xl font-semibold text-slate-50 cursor-pointer">
          Crypto<span className="text-orange-700">X</span>
        </h1>
      </div>
      {/* Navigation Links */}
       <div className="flex space-x-3">
        <NavLink
        to="/"
        className={({ isActive }) =>
            `block py-2 px-4 text-white duration-200 ${
            isActive && "text-orange-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-2`
        }
        >
        Home
        </NavLink>
        <NavLink
        to="/market"
        className={({ isActive }) =>
            `block py-2 px-4 text-white duration-200 ${
            isActive && "text-orange-700"
            } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-2`
        }
        >
        Market
        </NavLink>
       </div>
    </div>
  );
}

export default Header;
