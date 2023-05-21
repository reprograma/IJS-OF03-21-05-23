const {calcularValorTotalProjeto,} = require("../../dominio/calculadora/Projeto/valorProjeto");
const pacote = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("../../dominio/calculadora/Projeto/pacote.js");

describe("Valor do projeto - Pacote Basico >=50", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_basico");
  });

  test("Retornará o valor total de 1408 equivalente ao pacote premium", () => {
    const funcionalidades = [
      "setup",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "ssr",
    ];
    const valorHora = 40;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(1408);
  });
});

describe("Valor do projeto - Pacote Intermediario >=100", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_intermediario");
  });
  test("Retornará o valor total de 6221 equivalente ao pacote intermediario", () => {
    const funcionalidades = [
      "setup",
      "responsividade",
      "otimizacao_seo",
      "integracao_mailchimp",
      "integracao_api_propria",
    ];
    const valorHora = 72;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(6221);
  });
});

describe("Valor do projeto - Pacote Premium >=200", () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue("pacote_premium");
  });
  test("Retornará o valor total de 21600 equivalente ao pacote premium", () => {
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const valorHora = 120;
    const result = calcularValorTotalProjeto(funcionalidades, valorHora);
    expect(result).toEqual(21600);
  });
});
