import { IUser } from "@/contracts/entities/Iuser";

export interface Ilogin{
    login(email: string, password: string): Promise<IUser>
}