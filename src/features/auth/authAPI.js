import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../utils/axiosInstance";
export const LoginUser = createAsyncThunk(
    "auth/loginUser",
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await axiosInstance.post("/auth/login", credentials);
            return response.data;
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            if (error.message === "Network Error") {
                return rejectWithValue("সার্ভারে সংযোগ করা যাচ্ছে না।");
            }
            return rejectWithValue("Login ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
        }

    });
export const registerUser = createAsyncThunk("emp/registerUser",
    async (data, { rejectWithValue }) => {
        try {
            const res = await axiosInstance.post("/auth/register", data);
            return res.data;
        } catch (error) {
               if (error.response && error.response.data && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            }
            if (error.message === "Network Error") {
                return rejectWithValue("সার্ভারে সংযোগ করা যাচ্ছে না।");
            }
            return rejectWithValue("Registration ব্যর্থ হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।");
        
        }
    });

    export const logout = createAsyncThunk(
    'emp/logout',
    async (_, { rejectWithValue }) => {
        try {
            await axiosInstance.post('/auth/logout');
        } catch (err) {
            return rejectWithValue('logout করতে সমস্যা হয়েছে');
        }
    }
);
