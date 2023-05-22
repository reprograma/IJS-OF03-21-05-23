
const { calcularHorasDeProjeto} = require('./horasPorProjeto');

const { calcularValorBaseProjeto} = require('./valorBase');

describe('Vai retornar o valor base do projeto', () => {
    test('Retornar o valor final da quantidade de horas por projeto * valor hora', () => {
        const valorHora = 20

        const funcionalidades = [
            'setup', 
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]

        const totalDeHorasPorProjeto = calcularHorasDeProjeto(funcionalidades)

        const result = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora)

        expect(result).toEqual(1440)

    })
})