const {  calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Calculo de horas totais para finalizar 1º projeto", () => {
  test("dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidade", () => {
    const listaFuncionalidades = [
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
    expect(calcularHorasDeProjeto(listaFuncionalidades)).toEqual(120);
  });

  test("dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidade", () => {
    const listaFuncionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];
    expect(calcularHorasDeProjeto(listaFuncionalidades)).toEqual(72);
  });

  test("Funcionalidade inexistente", () => {
    const listaFuncionalidades = ["conexão banco de dados", "API restful"];
    expect(calcularHorasDeProjeto(listaFuncionalidades)).toBeNaN();
  });
});
