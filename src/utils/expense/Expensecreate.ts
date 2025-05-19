import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function createExpense(iduser: string, description: string, amount: number, date: Date, category: string, status: boolean) {
    const token = localStorage.getItem("Token");
    const response = await axios.post(`${API_URL}/expense/create`, {
        iduser,
        description,
        amount,
        date,
        category,
        status
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;
}