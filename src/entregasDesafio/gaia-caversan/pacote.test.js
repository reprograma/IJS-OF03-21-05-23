const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular o valor do projeto pacote de acordo com o projeto", () => {
  test("Retorna o valor do básico caso o número total de horas seja ATÉ 50", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna o valor do projeto básico caso o número total de horas seja EXATAMENTE 50", () => {
    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_basico");
  });

  test("Retorna o valor do projeto intermediário caso o número total de horas seja ATÉ 100", () => {
    const totalDeHorasPorProjeto = 99;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });
  test("Retorna o valor do projeto intermediário caso o número total de horas seja EXATAMENTE 100", () => {
    const totalDeHorasPorProjeto = 100;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_intermediario");
  });

  test("Retorna valor do projeto premium caso o número total de horas seja ATÉ 200", () => {
    const totalDeHorasPorProjeto = 199;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });

  test("Retorna valor premium caso o número total de horas seja EXATAMENTE 200", () => {
    const totalDeHorasPorProjeto = 200;
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual("pacote_premium");
  });
});
