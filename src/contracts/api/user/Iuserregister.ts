import { ImensagemApi } from "../../mensagem/Imensagem-api";

export interface Iuserregister <T>{
    post(url: string, body: T): Promise<ImensagemApi>;
}