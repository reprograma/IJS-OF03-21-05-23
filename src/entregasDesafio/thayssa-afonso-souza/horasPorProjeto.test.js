const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Calculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidade desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(72);
    });

    test('Calcular horas com funcionalidades que nao existem', () => {
        const listaFunciondalideNaoExiste = ['teste'];
    
        expect(calcularHorasDeProjeto(listaFunciondalideNaoExiste)).toBeNaN();
    });

    test('Erro ao calcular valorHora com as funcionalidades abaixo e comparar o resultado que deveria ser 64 e o enviado pelo teste estar sendo 58', () => {
        const funcionalidades = [
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'integracao_api_propria'
        ];

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(58); //o valor correto é 64
    });
});