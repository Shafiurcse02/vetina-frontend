import { createSlice } from '@reduxjs/toolkit';
import { LoginUser, registerUser,logout } from './authAPI';

const initialState = {
    user: null,
    loading: false,
    isAuthenticated: false,
    error: null,
};

const authSlice = createSlice({
    name: 'authName',
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.isAuthenticated = !!action.payload;
        },
        logoutR: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // Login
            .addCase(LoginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(LoginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(LoginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Login failed';
                state.isAuthenticated = false;
            })

            // Register
            .addCase(registerUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Registration failed';
                state.isAuthenticated = false;
            }) // logout
      .addCase(logout.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
         state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    },
});

export const { setToken, logoutR } = authSlice.actions;
export default authSlice.reducer;
