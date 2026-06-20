import { jwtDecode } from "jwt-decode";
export const getUserRole = () => {
    return localStorage.getItem("role");
};

export const getUserId = () => {
    return localStorage.getItem("userId");
};

export const isLoggedIn = () => {
    return localStorage.getItem("token") !== null;
};