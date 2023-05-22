const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo de horas totais para finalizar o projeto', () => {
    const funcionalidades = [
        'setup',
        'responsividade',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'construcao_1_pagina',
        'formulario',
        'ssr'
    ]

    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
        const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toEqual(72);

    }); 

    test('verificando se o valor de horas por projeto é um número maior do que o esperado', () => {
        const result = calcularHorasDeProjeto(funcionalidades);
        expect(result).toBeGreaterThanOrEqual(60);
    });
});

