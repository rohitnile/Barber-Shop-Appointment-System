import axios from "axios";

const API_URL = "http://localhost:1212/api/barbers";

export const getAllBarbers = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const addBarber = (barber) => {

    const token = localStorage.getItem("token");

    return axios.post(API_URL, barber, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const updateBarber = (id, barber) => {

    const token = localStorage.getItem("token");

    return axios.put(`${API_URL}/${id}`, barber, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const deleteBarber = (id) => {

    const token = localStorage.getItem("token");

    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};