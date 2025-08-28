// store.js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import leaveReducer from '../features/leave/leaveSlice';
import leaveTypeReducer from '../features/leaveType/leaveTypeSlice';
import doctorsReducer from '../features/doctors/DoctorsSlice';
import userReducer from '../features/emp/empSlice';
import  toggleLoginReducer  from '../features/auth/toggleLoginSlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        leaveType: leaveTypeReducer,
        leave: leaveReducer,
        doctors: doctorsReducer,
        userR:userReducer,
        toggleLogin: toggleLoginReducer,
    },
});

export default store;
