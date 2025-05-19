import { login } from "@/utils/user/Authlogin";


const authControllerLogin = {
    async loginUser(email: string, password: string): Promise<boolean> {

        try {
            const token = await login(email, password);
            
                return true;
            
        } catch (error) {
            console.error("Login failed:", error);
            return false;
        }
    }
}

export default authControllerLogin;