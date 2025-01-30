import { configureStore } from "@reduxjs/toolkit";
import CryptoSlice from "./Slices/CryptoSlice";

export const store = configureStore({
    reducer : {
        crypto : CryptoSlice,
    }
})