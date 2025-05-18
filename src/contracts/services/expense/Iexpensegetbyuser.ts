import { IExpense } from "@/contracts/entities/Iexpense";

export interface Iexpensegetbyuser{
    user(iduser: string): Promise <IExpense[]>
}