import axios from 'axios'

const API_URL = "https://gerenciamento-financeiro-1.onrender.com"

export async function register(name: string,
  email: string,
  password: string,
  confirmPassword: string) {
    const response = await axios.post(`${API_URL}/auth/register`, {
        name,
        email,
        password,
        confirmPassword
    });

    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;
}

