
const { calcularValorPorHora } = require('./valorHora');

describe('Valor por hora', () => {
  test("retornar o valor arredondado correto dado o valor recebido por mês", () => {
    const valorPorMes = 5000;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(29);
  });

  test("retornar o valor arredondado correto quando o valor por mês é zero", () => {
    const valorPorMes = 0;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(0);
  });

  test("retornar o valor arredondado correto quando o valor por mês é negativo", () => {
    const valorPorMes = -2000;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(-12);
  });

  test("retornar o valor arredondado correto quando o valor por mês é um valor decimal", () => {
    const valorPorMes = 3500.75;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(20);
  });
});