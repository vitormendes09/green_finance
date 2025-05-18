import { IUser } from "@/contracts/entities/Iuser";

export interface Iuserget{
    findUser(id: string): Promise <IUser>
}