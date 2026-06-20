import axios from "axios";

const API_URL = "http://localhost:1212/api/services";

export const getAllServices = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const addService = (service) => {

    const token = localStorage.getItem("token");

    return axios.post(API_URL, service, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const updateService = (id, service) => {

    const token = localStorage.getItem("token");

    return axios.put(`${API_URL}/${id}`, service, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const deleteService = (id) => {

    const token = localStorage.getItem("token");

    return axios.delete(`${API_URL}/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};