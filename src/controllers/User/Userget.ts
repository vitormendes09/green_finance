import { getUser } from "@/utils/user/Authget";

const authControllerGetUser = {
  async fetchUser(id: string): Promise<any | null> {
    try {
      const user = await getUser(id);

      // Usuário obtido com sucesso
      return user;
    } catch (error) {
      console.error("Failed to fetch user:", error);
      return null;
    }
  }
};

export default authControllerGetUser;
