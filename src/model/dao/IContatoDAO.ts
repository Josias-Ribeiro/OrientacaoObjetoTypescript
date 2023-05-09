import { Contato } from "../entity/Contato";

export interface ContatoDAO {
    recuperarContatos(): Contato[]
}