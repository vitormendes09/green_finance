import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function createExpense(
  userId: string,
  description: string,
  amount: number,
  date: Date,
  category: string,
  
) {
  try {
    const token = localStorage.getItem("Token");

    const response = await axios.post(`${API_URL}/expenses`, {
      userId,
      description,
      amount,
      date,
      category,
      
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const { acess_token } = response.data;
    localStorage.setItem("Token", acess_token);
    return acess_token;

  } catch (error: any) {
    console.error("Erro ao criar despesa (utils):", error?.response?.data || error);
    throw error; // importante para o controller capturar
  }
}
