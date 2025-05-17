import { ImensagemApi } from "@/contracts/mensagem/Imensagem-api";

export interface Iexpensedelete<T>{
    delete(url: string, body: T): Promise <ImensagemApi>
}