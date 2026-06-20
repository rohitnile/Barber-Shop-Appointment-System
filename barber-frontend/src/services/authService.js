import axios from "axios";

const API_URL = "http://localhost:1212/api/auth";

export const login = (loginData) => {
    return axios.post(`${API_URL}/login`, loginData);
};

export const register = (user) => {
    return axios.post(`${API_URL}/register`, user);
};