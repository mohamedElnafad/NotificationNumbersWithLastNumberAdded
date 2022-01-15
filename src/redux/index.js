import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { counter: 0, loading: { status: true } },
  reducers: {
    increment: (state) => {
      state.counter++;
    },
    getCounter: (state, action) => {
      state.counter = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = { status: action.payload.status };
    }
  }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
