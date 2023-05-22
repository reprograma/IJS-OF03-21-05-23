/*const { calcularValorTotalProjeto } = require('./valorProjeto');
const pacote = require('./pacote')

jest.mock('./pacote.js')


describe('valor do projeto', () => {
    beforeEach( () =>{
        pacote.calcularPacote.mockReturnValue('pacote_basico');
    })
    test('retornar valor total para um projeto dada as funcionalidades', () =>{
       // A soma dá 72
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'construcao_1_pagina',
            'formulario',
            'ssr'
        ];
        const valorHora = 70;

        const result = calcularValorTotalProjeto(funcionalidades, valorHora);

        expect(result).toEqual(3696)
    })
})*/

const calcularValorTotalProjeto = require('./valorProjeto');
const pacote = require('./pacote.test');

describe('valor do projeto', () => {
  test('retornar valor total para um projeto dada as funcionalidades', () => {
    const funcionalidades = [
      'configuracao_inicial',
      'responsividade',
      'construcao_pagina',
      'construcao_pagina',
      'construcao_pagina',
      'formulario',
      'ssr'
    ];
    const valorHora = 70;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696);
    expect(typeof result).toBe('number');
  });
});
