import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: [],
  },

  reducers: {
    addFormData: (state, action) => {
      state.formData.push(action.payload);
    },
  },
});

export default formSlice.reducer;

export const { addFormData } = formSlice.actions;
