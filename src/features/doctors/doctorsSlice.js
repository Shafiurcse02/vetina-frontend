// store/doctorsSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { doctors } from "../../assets/assets"; // যেখানে doctors array আছে

const initialState = {
  doctorsList: doctors, // পুরো array state এ রাখা
  selectedDoctor: null, // single doctor detail এর জন্য
};

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {
    selectDoctor: (state, action) => {
      state.selectedDoctor = state.doctorsList.find(
        (doc) => doc.id === action.payload
      );
    },
    clearSelectedDoctor: (state) => {
      state.selectedDoctor = null;
    },
  },
});

export const { selectDoctor, clearSelectedDoctor } = doctorsSlice.actions;
export default doctorsSlice.reducer;
