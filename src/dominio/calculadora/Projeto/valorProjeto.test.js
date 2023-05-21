const { calcularValorTotalProjeto} =  require ('./valorProjeto');
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularValorBaseProjeto } = require ('./valorProjeto');

const pacote = require ('./pacote')

jest.mock ('./pacote.js')

describe ('valor do projeto', ()=>{
    beforeEach (() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retornar valor total para um projeto dado as funcionalidades', ()=>{
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

        const result = calcularValorTotalProjeto (funcionalidades, valorHora)

        expect(result).toEqual(5544)

    })


})
describe ('valor base do projeto', ()=>{
    beforeEach (() => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('Retornar valor base do Projeto, para questão de visualização',()=>{
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr' 
        ]

        const valorHora = 70;
        
        const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades);

        const result = calcularValorBaseProjeto (totalDeHorasPorProjeto, valorHora);

        expect (result).toEqual(5040)
    } )
})