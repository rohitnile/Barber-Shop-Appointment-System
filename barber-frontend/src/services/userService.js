import axios from "axios";

const API_URL = "http://localhost:1212/api/users";

export const getAllUsers = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const addUser = (user) => {

    const token = localStorage.getItem("token");

    return axios.post(API_URL, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const updateUser = (id, user) => {

    const token = localStorage.getItem("token");

    return axios.put(`${API_URL}/${id}`, user, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const deleteUser = (id) => {

    const token = localStorage.getItem("token");

    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};