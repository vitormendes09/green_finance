import { ImensagemApi } from "@/contracts/mensagem/Imensagem-api";

export interface Iexpensecreate  <T>{
    post(url: string, body: T): Promise<ImensagemApi>;
}