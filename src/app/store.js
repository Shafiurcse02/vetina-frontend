// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import leaveReducer from '../features/leave/leaveSlice';
import leaveTypeReducer from '../features/leaveType/leaveTypeSlice';
import doctorsReducer from '../features/doctors/DoctorsSlice';
import userReducer from '../features/emp/empSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        leaveType: leaveTypeReducer,
        leave: leaveReducer,
        doctors: doctorsReducer,
        user:userReducer
    },
});

export default store;
