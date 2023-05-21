const { calcularValorTotalProjeto } = require('./valorProjeto')

const pacote = require('./pacote')

jest.mock('./pacote.js')

describe('Cálculo do valor do projeto com função mockada com definição de valores previstos para Pacote Premium', () => {
    beforeEach(() => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
    })

    test('Para um projeto com dadas funcionalidades, sendo R$ 57,00 a hora de trabalho, deve calcular o custo total de R$ 1.949,00', () => {
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'validacao_design_system'
        ]

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)

        expect(result).toEqual(6510)
    });
});