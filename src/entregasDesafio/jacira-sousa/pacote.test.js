/*RODAR OS TESTES SEPARADAMENTE*/

//teste com valores corretos
const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote correto para cada projeto', () => {
    test('Retorna pacote básico caso o numero total seja até 50', () =>{
        const totalDeHorasPorProjeto = 49;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_basico');
    }) 
})


   //teste com erro
    describe('Calcular pacote correto para cada projeto', () =>{
        test('Retornar pacote básico caso o numero total de horas seja exatamente 50', () =>{
            const totalDeHorasPorProjeto = 52;
            const result = calcularPacote(totalDeHorasPorProjeto);
            expect(result).toEqual('pacote_basico');
        })
    })



//teste pacote intermediário
describe('Calcular pacote correto para cada projeto', () => {
         
    test('Retornar pacote intermediário caso o numero total de horas seja até 100', () =>{
        const totalDeHorasPorProjeto = 89;
        const result = calcularPacote(totalDeHorasPorProjeto);
        expect(result).toEqual('pacote_intermediario');
    })

})


 
