import axios from 'axios';
import { JWT_TOKEN } from '../constant/AppConst';

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem(JWT_TOKEN);
        if (token) {
            config.headers.Authorization = `${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);