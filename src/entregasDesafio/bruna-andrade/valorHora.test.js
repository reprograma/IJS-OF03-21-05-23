const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Calcular valor por hora", () => {
  const valorPorMes = 1300;
  const result = calcularValorPorHora(valorPorMes);

  test("Retornar o valor arredondado correto dado o valor recebido por mês", () => {
    expect(result).toEqual(8);
  });

  test("Retornar o valor o valor recebido por mês", () => {
    expect(calcularValorPorHora(5000)).toBe(29);
  });

  test("Retornar o valor por hora do salário caso for maior que zero", () => {
    expect(result).toBeGreaterThan(0);
  });
});
