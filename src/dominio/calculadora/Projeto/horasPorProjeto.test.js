const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('cálculo de horas totais para finalizar o projeto', () => {
    test('dado um array com funcionanlidades desejadas no projeto, retorne a soma das horas das funcionalidades', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ]

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(72);
    })
})

test('calcular horas com funcionalidade que não existe', () => {
    const listaDeFuncionalidadesNãoExiste = [
        'teste'
    ]

    expect(calcularHorasDeProjeto (listaDeFuncionalidadesNãoExiste)).toBeNaN()
})