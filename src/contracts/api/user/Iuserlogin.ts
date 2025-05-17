import { ImensagemApi } from "../../mensagem/Imensagem-api";

export interface Iuserlogin <T>{
    post(url: string, body: T): Promise<ImensagemApi>;
}