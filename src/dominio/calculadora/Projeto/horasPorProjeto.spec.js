const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('Cálculo de horas totais para finalizar um projeto', () => {
    it('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
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
    }),


        it('Dado um array com as funcionalidades desejadas no projeto, deve conter valor correto de um item do array', () => {
            const funcionalidades = [
                'setup',
                'responsividade',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'construcao_1_pagina',
                'formulario',
                'ssr'
            ]


            expect(funcionalidades).toContain('setup')

            expect(funcionalidades).not.toContain('setu')
        })
})