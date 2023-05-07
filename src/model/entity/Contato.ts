import { validate } from 'email-validator'

export class Contato {
  private _nome: string;
  private _telefone: string;
  private _email: string;
  private _dataNascimento: Date;

  constructor(
    nome: string,
    telefone: string,
    email: string,
    dataNascimento: Date
  ) {}

  get nome(): string {
    return this._nome;
  }

  set nome(nome: string) {
    if (nome && nome.length > 0) this._nome = nome;
    else {
      console.log("nome inválido");
    }
  }

  get telefone(): string {
    return this._telefone;
  }

  set telefone(telefone: string) {
    const regex = /^(\+\d{2}.)?\(\d{2}\).(\d{5}|\d{4})-\d{4}$/;
    const validador = new RegExp(regex);

    if (telefone && validador.test(telefone)) this._telefone = telefone;
    else {
      console.log("telefone inválido");
    }
  }

  get email(): string{
    return this._email
  }

  set email(email: string){
    if (email && validate(email)) this.email = email
    else {console.log('email inválido')}
  }

  get dataNascimento(): Date {
    return this._dataNascimento;
  }

  set dataNascimento(dataNascimento: Date) {
    if (dataNascimento && dataNascimento < new Date()) this._dataNascimento = dataNascimento
    else {console.log('data de nascimento inválida')}
  }
}
