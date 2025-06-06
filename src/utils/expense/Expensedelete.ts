import axios from 'axios';

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

export async function deleteExpense(id: string) {
  try {
    const token = localStorage.getItem("Token");
    console.log("Token usado na requisição DELETE:", token);

    const response = await axios.delete(`${API_URL}/expenses/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log("Resposta da API ao deletar:", response.data);

    return response.data;
  } catch (error: any) {
    if (error.response) {
      console.error("Erro ao deletar despesa (resposta):", {
        status: error.response.status,
        data: error.response.data
      });
    } else if (error.request) {
      console.error("Erro ao deletar despesa (sem resposta):", error.request);
    } else {
      console.error("Erro ao deletar despesa (erro desconhecido):", error.message);
    }
    throw error;
  }
}
