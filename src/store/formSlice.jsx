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
    updateFieldValue: (state, action) => {
      state.formData[action.payload.idx].value = action.payload.value;
    },
    deleteField: (state, action) => {
      state.formData = action.payload;
    },
  },
});

export default formSlice.reducer;

export const { addFormData, updateFieldValue, deleteField } = formSlice.actions;
