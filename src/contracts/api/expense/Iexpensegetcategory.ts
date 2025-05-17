import { ImensagemApi } from "@/contracts/mensagem/Imensagem-api";

export interface Iexpensegetcategory <T>{
    get(url: string, body: T): Promise <ImensagemApi> 
}