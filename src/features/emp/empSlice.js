import { createSlice } from "@reduxjs/toolkit";
import { fetchCurrentUser, fetchProfile } from "./empAPI";

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const empSlice = createSlice({
  name: "emp",
  initialState,
  reducers: {
    clearUser: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchCurrentUser
      .addCase(fetchCurrentUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchCurrentUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      })

      // fetchProfile
      .addCase(fetchProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.user = null;
      })

     
  },
});

export const { clearUser } = empSlice.actions;
export default empSlice.reducer;
 export const selectCurrentUser = (state) => state.emp.user;