import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cryptos : []
}

const CryptoSlice = createSlice({
    name : 'crypto',
    initialState,
    reducers : {}
})

export default CryptoSlice.reducer