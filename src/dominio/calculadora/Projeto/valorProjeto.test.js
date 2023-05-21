const { calcularValorTotalProjeto } = require("./valorProjeto");
const pacote = require('./pacote')


jest.mock('./pacote.js')

describe('valor do projeto',() => {
    beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retornar valor total para um projeto', () => {
       //soma da 72
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const valorHora = 70;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(5544)
    })
})
