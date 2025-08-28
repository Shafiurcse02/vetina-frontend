// uiSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginForm: true, // true হলে Login form, false হলে Registration
};

export const toggleLoginSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLoginForm: (state, action) => {
      state.isLoginForm = action.payload;
    },
    toggleLoginForm: (state) => {
      state.isLoginForm = !state.isLoginForm;
    },
  },
});

export const { setLoginForm, toggleLoginForm } = toggleLoginSlice.actions;
export default toggleLoginSlice.reducer;
