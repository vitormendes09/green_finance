import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com"; 

export async function getUser(id: string) {
const response = await axios.get(`${API_URL}/user/${id}`, {
    headers: {
        Authorization: `Bearer ${localStorage.getItem("Token")}`
    }
});
const { user } = response.data;
localStorage.setItem("user", JSON.stringify(user));
return user;
} 
