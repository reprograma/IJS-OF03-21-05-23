const { calcularValorPorHora } = require('./valorHora')

describe('Cálculos de valor por hora de trabalho', () => {
    test('Para uma renda mensal de R$ 3.000, valor por hora de trabalho deve ser R$ 18,00', () => {
        expect(calcularValorPorHora(3000)).toBe(18)
    });

    test('Para uma renda mensal de R$ 5.000,00, valor por hora de trabalho arredondado deve ser R$ 9,00', () => {

        const rendaMensal = 5000
        const spyCalcularValorPorHora = calcularValorPorHora(rendaMensal)
        expect(spyCalcularValorPorHora).toEqual(29)
    });

    test('Para uma renda mensal de R$ 10.000,00, valor por hora de trabalho arredondado deve ser R$ 57,00', () => {

        const rendaMensal = 10000
        const spyCalcularValorPorHora = calcularValorPorHora(rendaMensal)
        expect(spyCalcularValorPorHora).toEqual(57)
    });
});