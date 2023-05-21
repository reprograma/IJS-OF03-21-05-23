const { calcularValorPorHora } = require('./valorHora');

test('Retornar o valor arredondado correto dado o valor recebido por mês', () => {
    expect(calcularValorPorHora(5000)).toBe(29);
});

describe('funções para testar valor hora trabalhada', () => {
    const valorPorMes = 5000; //criado o mock

    const result = calcularValorPorHora(valorPorMes);

    test('Retornar o valor arredondado correto dado o valor recebido por mês', () => {;
        expect(result).toEqual(29);
    });
});