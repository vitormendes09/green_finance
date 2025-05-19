import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com"

export async function login(username: string, password: string) {
    const response = await axios.post(`${API_URL}/auth/login`, {
        username,
        password
    });

    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;


   
}

export function logout() {
    localStorage.removeItem("Token");
}

export function getToken() {
    return localStorage.getItem("Token");
}
