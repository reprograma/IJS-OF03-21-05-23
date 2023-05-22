/*RODAR OS TESTES SEPARADAMENTE*/

//teste com total de horas correto
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo de horas totais para finalizar um projeto', () =>{
    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () =>{
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

        expect(result).toEqual(72)
    })
})


    // test('Calcular horas com funcionalidade que não existe', () => {
    //     const listaDeFuncionalidadesNaoExiste = ['formulario'];

    //     expect (calcularHorasDeProjeto(funcionalidades)).toBeNaN();
    // })


//teste com total de horas incorreto
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

describe('Cálculo de horas totais para finalizar um projeto', () =>{
    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () =>{
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

        expect(result).toEqual(56);
    })
})

// acrescentando novas funcionalidades e com erro na soma
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe('Calculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retorna a soma das horas necessárias', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ]

        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(22);
    })

})