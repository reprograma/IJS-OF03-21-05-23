const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe("Valor por hora", () => {
  test("retornar o valor arredondado pra cima dado o valor recebido por mês", () => {
    const valorPorMes = 5000;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(29);
  });
  test("retornar o valor arredondado pra cima dado o valor recebido por mês", () => {
    const valorPorMes = 1300;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(8);
  });
  test("retornar o valor arredondado pra cima dado o valor recebido por mês", () => {
    const valorPorMes = 1000;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(6);
  });
  test("retornar o valor arredondado pra cima dado o valor recebido por mês", () => {
    const valorPorMes = 7523;
    const result = calcularValorPorHora(valorPorMes);
    expect(result).toEqual(43);
  });
});