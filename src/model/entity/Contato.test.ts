import { Contato } from "./Contato"

describe('Testa o modelo de Contato', ()=> {

    test('Deve criar um novo objeto de contato com os atributos válidos', () =>{
        const contato = new Contato('Josias', '(37) 99114-8525', 'josias@gmail.com', new Date('2022-09-27'))
        expect(contato.nome).toBe('Josias')
        expect(contato.email).toBe('josias@gmail.com')
        expect(contato.telefone).toBe('(37) 99114-8525')
        expect(contato.dataNascimento).toStrictEqual(new Date('2022-09-27'))
    })

})