import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    // Request interceptor to add authorization header for every secure call to the API:
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('Request stopped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, async (error) => {
        const status = error.response.status;
        // console.log('Status error in the interceptor', status);
        // If the status is 401 or 403, logout the user and navigate to the login page:
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    });
    return axiosSecure;
};

// Intercepts 401 & 403 status:
axiosSecure.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default useAxiosSecure;