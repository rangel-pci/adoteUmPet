import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'https://pets.rangelpereira.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
