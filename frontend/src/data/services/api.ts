import axios from "axios";

export const ApiService = axios.create({
    baseURL: 'http://pets.rangelpereira.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});
