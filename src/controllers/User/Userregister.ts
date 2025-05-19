import { register } from "@/utils/user/Authregister";

const authControllerRegister = {
  async registerUser(
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  ): Promise<boolean> {
    try {
      const token = await register(name, email, password, confirmPassword);
      
      // Sucesso no registro
      return true;
    } catch (error) {
      console.error("Registration failed:", error);
      return false;
    }
  }
};

export default authControllerRegister;
