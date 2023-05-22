const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote');
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes');

jest.mock('../../dominio/calculadora/Projeto/pacote');

describe('valor do projeto', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    const funcionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr'
    ]

    test('Retornar valor total para um projeto dada as funcionalidades', () => {
        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora);
        expect(result).toEqual(5544);
    });  

    test('Verificar se uma funcionalidade existe no array funcionalidades', () => {
        expect(funcionalidades).toContain('responsividade');
    }); 
});