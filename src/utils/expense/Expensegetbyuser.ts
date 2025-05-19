import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function getExpenseByUser(iduser: string) {
    const token = localStorage.getItem("Token");
    const response = await axios.get(`${API_URL}/expense/getbyuser/${iduser}`, {
       
    });
    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;
}