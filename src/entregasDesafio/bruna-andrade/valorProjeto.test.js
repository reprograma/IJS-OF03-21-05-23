const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");
const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("valor do projeto + taxa contratual", () => {
  beforeEach(() => {
    calcularPacote.mockReturnValue("pacote_basico", "pacote_intermediario", "pacote_premium");
  });

  test("Retornar valor total para um projeto com pacote básico", () => {
    const funcionalidades = ["setup", "responsividade", "construcao_1_pagina", "formulario", "ssr"];
    const valorHora = 56;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3450);
  });

  test("Retornar valor total para um projeto com pacote intermediário", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "otimizacao_seo",
      "integracao_mailchimp",
      "integracao_api_propria"
    ];
    const valorHora = 72;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(5702);
  });

  test("Retornar valor total para um projeto com pacote premium", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "formulario",
      "ssr",
      "otimizacao_seo",
      "integracao_mailchimp",
      "integracao_api_propria"
    ];
    const valorHora = 104;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(11898);
  });
});
