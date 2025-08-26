import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', // আপনার API URL
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // ক্রস-অরিজিন রিকোয়েস্টে কুকিজ পাঠানোর জন্য
});

export default axiosInstance;

