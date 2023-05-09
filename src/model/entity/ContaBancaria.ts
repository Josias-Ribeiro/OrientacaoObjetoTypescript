export class ContaBancaria {
  private _saldo: number;
  private _numero: string = '';
  private _agencia: string = '';

  constructor(numero: string, agencia: string) {
    this._saldo = 0;
    this.numero = this._validarNumero(numero) ? numero : "00000-0";
    this.agencia = this._validarAgencia(agencia) ? agencia : "0000-0";
  }

  get agencia(): string {
    return this._agencia;
  }

  get numero(): string {
    return this._numero;
  }

  set numero(valor: string) {
    this._validarNumero(valor);
  }

  set agencia(valor: string) {
    this._validarAgencia(valor);
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

  private _validarNumero(numero: string): boolean {
    const regex = /^\d{5}-\d{1}$/;
    if (regex.test(numero)) {
      this._numero = numero;
      return true;
    }
    return false;
  }

  private _validarAgencia(agencia: string): boolean {
    const regex = /^\d{4}-\d{1}$/;
    if (regex.test(agencia)) {
      this._agencia = agencia;
      return true;
    }
    return false;
  }
}
