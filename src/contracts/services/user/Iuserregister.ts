import { IUser } from "@/contracts/entities/Iuser";

export interface Iuserregister{ 
    register (name: string, email: string, password: string): Promise<IUser>;
}