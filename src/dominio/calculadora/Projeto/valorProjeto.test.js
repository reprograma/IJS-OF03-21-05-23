const { calcularValorTotalProjeto } = require('./valorProjeto');

describe('Custo total do projeto', () => {
    test('Para um projeto com dadas funcionalidades, sendo R$ 29,00 a hora de trabalho, deve calcular o custo total de R$ 1.949,00', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo'
        ]

        const result = calcularValorTotalProjeto(funcionalidades, 29)
        expect(result).toBe(1949)
    });

    test('Para um projeto com dadas funcionalidades, sendo R$ 57,00 a hora de trabalho, deve calcular o custo total de R$ 1.949,00', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'validacao_design_system'
        ]

        const result = calcularValorTotalProjeto(funcionalidades, 57)
        expect(result).toBe(4241)
    });
});
