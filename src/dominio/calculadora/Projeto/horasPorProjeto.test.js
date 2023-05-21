const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('Cálculo de horas por projeto', () => {
    const funcionalidades = [
        'setup',
        'formulario',
        'responsividade',
        'otimizacao_seo',
        'construcao_1_pagina',
        'integracao_mailchimp',
        'ssr',
        'integracao_api_propria'
    ]
    const funcionalidadesNãoCadastrada = [
        'testes unitários',
    ]

    const result = calcularHorasDeProjeto(funcionalidades)
    const result2 = calcularHorasDeProjeto(funcionalidadesNãoCadastrada)
    test('Para 3 atividades, deve retornar tantas horas por projeto ', () => {
        // console.log(calcularHorasDeProjeto(funcionalidades))
        expect((result)).toEqual(104)
    });
    test('Para atividade inexistente, deve retornar NaN ', () => {
        // console.log(calcularHorasDeProjeto(funcionalidades))
        expect((result2)).toBeNaN()
        // or 
        expect((result2)).toBe(NaN)
    });
});