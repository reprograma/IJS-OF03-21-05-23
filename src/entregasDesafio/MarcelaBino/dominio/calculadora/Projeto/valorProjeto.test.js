const { calcularValorTotalProjeto} = require('./valorProjeto');

const pacote = require('./pacote')

jest.mock('./pacote.js')

describe ('Valor do projeto', () =>{
    beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })

    test('Retornar valor total para um projeto dada as funcionalidades', () =>{
        //A soma dá 72
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

        expect(result). toEqual(3696)
    })
})