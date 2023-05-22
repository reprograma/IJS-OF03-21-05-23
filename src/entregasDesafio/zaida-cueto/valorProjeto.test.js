// const { calcularValorTotalProjeto } = require('./valorProjeto');
// const pacote = require('./pacote')

// jest.mock('./pacote.js')

// describe('valor do projeto', () => {
//     beforeEach( () =>{
//         pacote.calcularPacote.mockReturnValue('pacote_basico');
//     })
//     test('retornar valor total para um projeto dada as funcionalidades', () =>{
//        // A soma dá 72
//         const funcionalidades = [
//             'setup',
//             'responsividade',
//             'construcao_1_pagina',
//             'construcao_1_pagina',
//             'construcao_1_pagina',
//             'formulario',
//             'ssr'
//         ];
//         const valorHora = 70;

//         const result = calcularValorTotalProjeto(funcionalidades, valorHora);

//         expect(result).toEqual(5544)
//     })
// })

const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto");

const { TAXAS_CONTRATUAIS_POR_PACOTE } = require("../../dominio/calculadora/constantes/constantes");
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");

jest.mock("./horasPorProjeto", () => ({
// Mock a função calcularHorasDeProjeto para retornar um valor fixo para os testes
  calcularHorasDeProjeto: jest.fn(() => 10),
}));

jest.mock("./pacote", () => ({
   // Mock a função calcularPacote para retornar um valor fixo para os testes
  calcularPacote: jest.fn(() => "pacoteA"),
}));

describe("Valor do projeto", () => {
  it("Retornar valor total para um projeto dada as funcionalidades projeto corretamente", () => {
    // Configuração dos mocks
    // Defina o valor de retorno da função mockada para o teste
    calcularHorasDeProjeto.mockReturnValueOnce(10); 
    // Defina o valor de retorno da função mockada para o teste
    calcularPacote.mockReturnValueOnce("pacoteA"); 

    const funcionalidades = [
      "setup",
      "responsividade",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "construcao_1_pagina",
      "formulario",
      "ssr",
    ];
    // Definindo o valor da hora para o teste
    const valorHora = 50; 
    
// Valor esperado para o cálculo do valor base
    const valorBaseEsperado = 10 * 50; 

    // Configuração do valor de taxa contratual para o pacoteA (pode ser ajustado de acordo com as suas necessidades)
    TAXAS_CONTRATUAIS_POR_PACOTE.pacoteA = 1.2;

// Valor esperado para o cálculo do valor total
    const valorTotalEsperado = Math.round(
      valorBaseEsperado * TAXAS_CONTRATUAIS_POR_PACOTE.pacoteA
    ); 

    // Execução da função a ser testada
    const valorTotal = calcularValorTotalProjeto(funcionalidades, valorHora);

    // Verificação do resultado
    expect(valorTotal).toEqual(valorTotalEsperado);
  // Verifique se a função calcularHorasDeProjeto foi chamada com as funcionalidades corretas
    expect(calcularHorasDeProjeto).toHaveBeenCalledWith(funcionalidades); 
     // Verifique se a função calcularPacote foi chamada com o totalDeHorasPorProjeto correto
    expect(calcularPacote).toHaveBeenCalledWith(10);
  });
});
