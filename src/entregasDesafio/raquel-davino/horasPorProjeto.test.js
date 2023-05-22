const { calcularHorasDeProjeto}  = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('cálculo de horas totais para finalizar um projeto', () => {
    test('dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas das funcionalidade', () => {
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
        const resultado = calcularHorasDeProjeto(funcionalidades);
        expect(resultado).toEqual(104);
    })
});


describe('cálculo de horas com funcionalidade que não existe', () => {
    test('dada uma funcionalidade inexistente, retorna  NaN', () => {

        const listaFuncionalidades = ['teste']
        const resultado = calcularHorasDeProjeto(listaFuncionalidades);

        expect(resultado).toBeNaN();
    })
});

