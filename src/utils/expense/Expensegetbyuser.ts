import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function getExpenseByUser(userId: string) {
  const token = localStorage.getItem("Token");

  const response = await axios.get(`${API_URL}/expenses/${userId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data; // Aqui está a lista de despesas
}