const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcularHorasDeProjeto", () => {
  test("retorna o total de horas corretamente", () => {
    const listaDeFuncionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];
    const resultadoEsperado = 72; 

    const result = calcularHorasDeProjeto(listaDeFuncionalidades);

    expect(result).toBe(resultadoEsperado);
  });

  test("Calcular horas com funcionalidade que não existe", () => {
    const funcionalidades = [];
    const resultadoEsperado = 0;

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toBe(resultadoEsperado);
  });
});


//const { calcularHorasDeProjeto } = require("./horasPorProjeto");

// describe('Cálculo de horas totais para finalizar um projeto', () =>{
//     test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () =>{
//         const funcionalidades = [
//             'setup',
//             'responsividade',
//             'construcao_1_pagina',
//             'construcao_1_pagina',
//             'construcao_1_pagina',
//             'formulario',
//             'ssr'
//         ]
//         const result = calcularHorasDeProjeto(funcionalidades);

//         expect(result).toEqual(72)
//     })
// })

// test('Calcular horas com funcionalidade que não existe', () =>{
//   const listaDeFuncionalidadesNaoExiste = ['formulario']

//   expect(calcularHorasDeProjeto(listaDeFuncionalidadesNaoExiste)).toBe(16)
// })
