import { Contato } from "../entity/Contato";
import { ContatoDAO } from "./IContatoDAO";
import { join } from "path";
import { readFileSync } from "fs";
import * as csv from 'csv-parse/lib/sync'

export class ContatoCsvDAO implements ContatoDAO {
    private _caminhoArquivo: string;

    constructor() {
        this._caminhoArquivo = join(__dirname, "../../", "data", "contatos.json");
      }

    recuperarContatos(): Contato[] {
        const conteudoStr = readFileSync(this._caminhoArquivo, "utf-8");
        const listaObj: any[] = csv.parse(conteudoStr);
        const contatos = listaObj.map(obj => new Contato(
            obj[0],
            obj[1],
            obj[2],
            new Date(obj[3])
        ))

        return contatos

       
    
        
    }
}