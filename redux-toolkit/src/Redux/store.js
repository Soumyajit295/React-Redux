import { configureStore } from "@reduxjs/toolkit";
import todoSlice from './Slices/todoSlices'

export const store = configureStore({
    reducer : {
        todo : todoSlice
    }
})

