import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const apikey = import.meta.env.VITE_CRYPTO_KEY;

const initialState = {
  cryptos: [],
  showcaseCrypto: [],
  loading: true,
  error: null,
  currency: "inr",
  singleCrypto : {}
};

export const fetchCoins = createAsyncThunk(
  "crypto/getCoins",
  async (currency, { rejectWithValue }) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apikey,
      },
    };
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
        options
      );

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Fetch Coins Error:", errorText);
        return rejectWithValue({ message: errorText });
      }

      const result = await response.json();
      return result;
    } catch (err) {
      console.error("Fetch Coins Error:", err.message);
      return rejectWithValue({ message: err.message });
    }
  }
);

export const fetchSingleCryptoDetails = createAsyncThunk(
  "/crypto/single",
  async (id, { rejectWithValue }) => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": apikey,
      },
    };
    try {
      const result = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}`,
        options
      );
      if (!result.ok) {
        const errorText = await response.text();
        console.error("Fetch Coins Error:", errorText);
        return rejectWithValue({ message: errorText });
      }
      const finalRes = await result?.json();
      return finalRes;
    } catch (err) {
      console.error("Fetch Single Crypto Data Error:", err.message);
      return rejectWithValue({ message: err.message });
    }
  }
);

const CryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    changeCurrency: (state, action) => {
      state.currency = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        (state.loading = true), (state.error = null);
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        (state.loading = false),
          (state.error = null),
          ((state.showcaseCrypto = action.payload.slice(0, 4)),
          (state.cryptos = action.payload));
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        (state.loading = false), (state.error = action.payload);
      })
      .addCase(fetchSingleCryptoDetails.pending,(state)=>{
        (state.loading = true),(state.error = null)
      })
      .addCase(fetchSingleCryptoDetails.fulfilled,(state,action)=>{
        (state.loading = false),
        (state.error = null),
        (state.singleCrypto = action.payload)
      })
      .addCase(fetchSingleCryptoDetails.rejected,(state,action)=>{
        (state.loading = false),(state.error = action.payload)
      })
  },
});

export const { changeCurrency } = CryptoSlice.actions;

export default CryptoSlice.reducer;
