const { calcularPacote} = require('../../dominio/calculadora/Projeto/pacote');

describe('calcular pacote para cada projeto', () => {
    test('Retorna pacote básico caso o número total seja até 50', () => {

        const totalDeHorasPorProjeto = 49;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_basico');
    })
})


describe('calcular pacote para cada projeto', () => {
    test('Retorna pacote intermediário caso o número total seja até 100', () => {

        const totalDeHorasPorProjeto = 59;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_intermediario');
    })
})

describe('calcular pacote para cada projeto', () => {
    test('Retorna pacote básico caso o número total seja exatamente 50', () => {

        const totalDeHorasPorProjeto = 50;
        const resultado = calcularPacote(totalDeHorasPorProjeto);
        expect(resultado).toEqual('pacote_basico');
    })
})

