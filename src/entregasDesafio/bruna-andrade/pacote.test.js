const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

describe("Calcular pacote", () => {
  test("Retorna pacote básico caso o número total seja até 50", () => {
    const totalDeHorasPorProjeto = 49;
    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });

  test("Retornar pacote básico caso o número total de horas seja exatamente 50", () => {
    const totalDeHorasPorProjeto = 49;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual("pacote_basico");
  });

  test("Retornar pacote premium se o projeto tiver 104 horas", () => {
    const totalDeHorasPorProjeto = 104;

    expect(calcularPacote(totalDeHorasPorProjeto)).toBe("pacote_premium");
  });
});
