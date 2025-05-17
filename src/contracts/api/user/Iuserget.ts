import { ImensagemApi } from "../../mensagem/Imensagem-api";

export interface Iuserget <T>{
    get(url: string, body: T): Promise <ImensagemApi> 
}