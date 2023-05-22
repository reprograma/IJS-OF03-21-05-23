const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calcular horas por projeto", () => {
  test("Dado o seguinte array a soma de suas funcionalidades deve retornar o valor total do projeto", () => {
    const funcionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria"
    ];

    expect(calcularHorasDeProjeto(funcionalidades)).toEqual(104);
  });
});

test("calcular horas com funcionalidade que não existe", () => {
  const listaDeFuncionalidadesNaoExiste = ["teste"];

  expect(calcularHorasDeProjeto(listaDeFuncionalidadesNaoExiste)).toBeNaN();
});

test("Se a lista contendo 3 funcionalidades tera 24 horas", () => {
  const listaDeFuncionalidades = ["setup", "construcao_1_pagina", "ssr"];

  expect(calcularHorasDeProjeto(listaDeFuncionalidades)).toBe(24);
});
