import { ImensagemApi } from "@/contracts/mensagem/Imensagem-api";

export interface Iexpensegeyuser <T>{

    get(url: string, body: T): Promise <ImensagemApi>
}