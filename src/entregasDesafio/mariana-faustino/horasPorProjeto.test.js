const {calcularHorasDeProjeto} = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('cálculo de horas totais para finalizar um projeto', () =>{
    test('dado um array com as funcionalidades desejadas no projeto, precisa retornar a soma das horas das funcionalidades', () =>{
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]
        const result = calcularHorasDeProjeto(funcionalidades)
        expect(result).toEqual(72)
    })
})


test('Calcular horas com funcionalidades que não existem', () =>{
    const listaDeFuncionalidadesQueNaoExistem = ['formulario']
    expect(calcularHorasDeProjeto(listaDeFuncionalidadesQueNaoExistem)).toBe(16)
})


