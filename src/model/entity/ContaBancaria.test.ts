import { ContaBancaria } from "./ContaBancaria"

describe('Testa as funcionalidades de uma conta bancaria', () => {
    
    test('Deve criar uma conta bancaria como numero e agencia padroes', () => {
        const conta = new ContaBancaria('123456-7', '12345-6')
        expect(conta.numero).toBe('00000-0') 
        expect(conta.agencia).toBe('0000-0') 
    })

    test('Deve criar uma conta bancária com o número e a agencia especificados', () => {
        const numero = '12345-6'
        const agencia = '1234-5'
        const conta = new ContaBancaria(numero,agencia )
        expect(conta.numero).toBe(numero) 
        expect(conta.agencia).toBe(agencia) 
    })

    test('O saldo de uma conta recém criada deve ser igual a 0 ', () => {
        const conta = new ContaBancaria('12345-6', '1234-5')
        expect(conta.consultar()).toBe(0)
    })

    test('O saldo deve atualizar corretamente após a realização do depósito', ()=>{
        const conta = new ContaBancaria('12345-6', '1234-5')
        conta.depositar(10)
        expect(conta.consultar()).toBe(10)
    })

    test('O saldo deve atualizar corretamente após a realização do saque', ()=>{
        const conta = new ContaBancaria('12345-6', '1234-5')
        conta.depositar(10)
        conta.sacar(5)
        expect(conta.consultar()).toBe(5)
    })
})
