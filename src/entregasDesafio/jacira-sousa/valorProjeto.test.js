        /*RODAR OS TESTES SEPARADAMENTE*/
        
const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto');
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

// teste com erro no valor
describe('valor do projeto', () => {
    beforeEach( () =>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retornar valor total para um projeto dada as funcionalidades', () =>{
       // A soma dá 72
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

        expect(result).toEqual(3696)
    })
})

// teste com valor correto
describe('valor do projeto', () => {
    beforeEach( () =>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retornar valor total para um projeto dada as funcionalidades', () =>{
       // A soma dá 72
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

//outra forma de teste
describe('Cálculo de horas totais para finalizar um projeto', () =>{
    test('Dado um array com as funcionalidades desejadas no projeto, retornar valor total para um projeto dada as funcionalidades', () =>{
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]
        const result = calcularValorTotalProjeto(funcionalidades);

        expect(result).toEqual(72)
    })
})
