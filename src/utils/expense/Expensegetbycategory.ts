import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function byCategory(userId: string, category: string) {
    const token = localStorage.getItem("Token");
    const response = await axios.get(`${API_URL}/expenses/${category}/${userId}`, {
        
    });
    const {acess_token} = response.data;
    localStorage.setItem("Token", acess_token)
    return acess_token;
}