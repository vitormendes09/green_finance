import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function deleteExpense(id: string) {
    const token = localStorage.getItem("Token");
    const response = await axios.delete(`${API_URL}/expense/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;
}

