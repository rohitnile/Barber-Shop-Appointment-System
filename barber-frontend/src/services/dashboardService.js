import axios from "axios";

const BASE_URL = "http://localhost:1212/api";

const getHeaders = () => ({
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }
});

export const getUserCount = () =>
    axios.get(`${BASE_URL}/users/count`, getHeaders());

export const getBarberCount = () =>
    axios.get(`${BASE_URL}/barbers/count`, getHeaders());

export const getServiceCount = () =>
    axios.get(`${BASE_URL}/services/count`, getHeaders());

export const getAppointmentCount = () =>
    axios.get(`${BASE_URL}/appointments/count`, getHeaders());