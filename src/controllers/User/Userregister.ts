import { register } from "@/utils/user/Authregister";

const authControllerRegister = {
    async register(name: string, email: string, password: string, confirmPassword: string): Promise <boolean>{
        try{
            const token = await register(name, email, password, confirmPassword);

            return true
        } catch (error) {
        console.error("Register failed: ", error);
        return false;
        }
    }
}


export default authControllerRegister;