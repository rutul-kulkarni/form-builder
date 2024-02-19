import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    count: 0,
  },

  reducers: {
    increaseCounter: (state, action) => {
      state.count += 1;
    },
  },
});

export default counterSlice.reducer;

export const { increaseCounter } = counterSlice.actions;
