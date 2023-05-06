export class ContaBancaria {
  private _saldo: number;
  private _numero: string;
  private _agencia: string;

  constructor(numero: string, agencia: string) {
    this._saldo = 0;
    this._numero = numero;
    this._agencia = agencia;
  }

  get agencia(): string {
    return this._agencia;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(valor: string) {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(valor)) {
      this._numero = valor;
    } else {
      console.log("formato de numero inválido");
    }
  }

  set agencia(valor: string) {
    const regex = /^\d{4}-\d{1}$/;
    if (regex.test(valor)) {
      this._agencia = valor;
    } else {
      console.log("formato de agencia inválido");
    }
  }

  consultar(): number {
    return this._saldo;
  }

  depositar(valor: number): void {
    if (valor >= 0) {
      this._saldo += valor;
    }
  }

  sacar(valor: number): void {
    if (valor >= 0 && this._saldo >= valor) {
      this._saldo -= valor;
    }
  }
}
