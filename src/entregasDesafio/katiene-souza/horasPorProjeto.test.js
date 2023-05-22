const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo de horas totais para finalizar o projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
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

    }); 

    test('Calcular horas com funcionalidades que não existe', () => {
        const listaDeFuncionalidadesNaoExiste = ['teste'];

        expect(calcularHorasDeProjeto(listaDeFuncionalidadesNaoExiste)).toBeNaN()

    });
});

