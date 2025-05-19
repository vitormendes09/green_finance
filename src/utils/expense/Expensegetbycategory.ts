import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function byCategory(iduser: string, category: string) {
    const token = localStorage.getItem("Token");
    const response = await axios.get(`${API_URL}/expense/getbycategory/${iduser}/${category}`, {
        
    });
    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;
}