const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('Cálculo de horas totais para finalizar um projeto', () => {
    test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
        const funcionalidades = [
            'formulario',
            'setup', 
            'responsividade', 
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria',
        ]


        const result = calcularHorasDeProjeto(funcionalidades);

        expect(result).toEqual(104)
    })
})
        test('Calcular horas com funcionalidade que não existeo', () => {
           
            const listaDeFuncionalidadeNaoExiste = ['teste']
    
            expect(calcularHorasDeProjeto(listaDeFuncionalidadeNaoExiste).toBeNan)
    })

    


    