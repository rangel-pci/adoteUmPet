import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://192.168.1.15:8000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});