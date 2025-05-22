import axios from "axios";

const API_URL = "https://gerenciamento-financeiro-1.onrender.com";

const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      password,
    });

    const { token } = response.data;

    // Salva o token no localStorage
    localStorage.setItem("token", token);

    // Decodifica o token para extrair o id e o nome
    const payload = JSON.parse(atob(token.split('.')[1]));
    const user = payload.user;

    return {
      id: user._id,
      name: user.name,
      email: user.email,
      token: token,
    };
  } catch (err) {
    console.error("Erro ao fazer login:", err);
    throw new Error("Login inválido");
  }
};

export default {
  loginUser,
};
