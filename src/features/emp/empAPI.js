import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";

export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrentUser',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.get("/profile");
            return response.data; // user info if logged in
        } catch (error) {
            return rejectWithValue('Failed to fetch user');
        }
    }
);

export const fetchProfile = createAsyncThunk(
    'emp/fetchProfile',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const res = await axiosInstance.get('/profile');
            return res.data;
        } catch (err) {
            if (err.response?.status === 401) {
                dispatch(logout());
            }
            return rejectWithValue('প্রোফাইল লোড করতে সমস্যা হয়েছে');
        }
    }
);
