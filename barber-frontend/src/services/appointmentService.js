import axios from "axios";

const API_URL = "http://localhost:1212/api/appointments";

export const bookAppointment = (appointment) => {

    const token = localStorage.getItem("token");

    return axios.post(API_URL, appointment, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getAllAppointments = () => {

    const token = localStorage.getItem("token");

    return axios.get(API_URL, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
};

export const getAppointmentsByUser = (userId) => {

    const token = localStorage.getItem("token");

    return axios.get(
        `${API_URL}/user/${userId}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const deleteAppointment = (id) => {

    const token = localStorage.getItem("token");

    return axios.delete(
        `${API_URL}/${id}`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const updateAppointmentStatus = (
    id,
    status
) => {

    const token = localStorage.getItem("token");

    return axios.put(
        `${API_URL}/${id}/status?status=${status}`,
        {},
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};

export const getAppointmentStatusCount = () => {

    const token = localStorage.getItem("token");

    return axios.get(
        `${API_URL}/status-count`,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );
};