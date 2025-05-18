import { IExpense } from "@/contracts/entities/Iexpense";

export interface Iexpensegetcategory{
    category(id: string, nome: string): Promise <IExpense[]>
}