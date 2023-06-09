import { writeFileSync } from "fs";
import { join } from "path";

import { faker } from "@faker-js/faker";
import { Contato } from "./model/entity/Contato";

faker.setLocale("pt_BR");

const contatos: Contato[] = [];
let linhasCsv = "";
const numeroContatos = 100;

for (let index = 0; index < numeroContatos; index++) {
  const obj: Contato = new Contato 
    (faker.name.fullName(),
    faker.phone.number(),
    faker.internet.email(),
    faker.date.past())
  ;

  contatos.push(obj);
  const linha = `${obj.nome}, ${obj.telefone},${obj.email},${obj.dataNascimento}`;
  linhasCsv += linha + "\n";
}

const caminhoDiretorioArquivos = join(__dirname, 'data')
const strJson = JSON.stringify(contatos)
const caminhoArquivoJson = join(caminhoDiretorioArquivos, 'contatos.json')
writeFileSync(caminhoArquivoJson, strJson)

const caminhoArquivoCSV = join(caminhoDiretorioArquivos, 'contatos.csv')
writeFileSync(caminhoArquivoCSV, linhasCsv)

console.log('arquivos gravados')


