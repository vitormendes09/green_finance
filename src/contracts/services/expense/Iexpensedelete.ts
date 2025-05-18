import { IExpense } from "@/contracts/entities/Iexpense";

export interface Iexpensedelete{
    delete(id: string): Promise <IExpense>
}