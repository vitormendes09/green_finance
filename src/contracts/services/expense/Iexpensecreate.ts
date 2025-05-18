import { IExpense } from "@/contracts/entities/Iexpense";
import {Types} from "mongoose";

export interface Iexpensecreate{
    create(idser: Types.ObjectId | string, description: string, amount: string, date: Date, category: boolean): Promise<IExpense>
}