const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularValorBaseProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');

jest.mock('../../dominio/calculadora/Projeto/pacote.js');

//calcularValorTotalProjeto
describe('cálculo do valor do projeto', () => {
   
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    test('retornar valor total para um projeto dadas as funcionalidades', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'ssr',
        ]

        const valorHora = 70;
        const resultado = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(resultado).toEqual(5544);
    }) 
   
});

//calcularValorBaseProjeto
describe('calcular valor base do projeto', () => {
    test('Em caso de input null, retornar valor base do projeto zerado', ()=> {
        const totalDeHorasPorProjeto = 120;
        const valorHora = null;

        const resultado = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora);

        expect(resultado).toBe(0);
    })

})
