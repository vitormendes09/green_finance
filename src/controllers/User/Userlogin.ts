import loginUser from "@/utils/user/Authlogin";

const authControllerLogin = {
  async loginUser(email: string, password: string): Promise<{
    id: string;
    name: string;
    email: string;
    token: string;
  } | null> {
    try {
      const user = await loginUser.loginUser(email, password);
      return user; // retorna dados do usuário
    } catch (error) {
      console.error("Login failed:", error);
      return null;
    }
  }
};

export default authControllerLogin;
