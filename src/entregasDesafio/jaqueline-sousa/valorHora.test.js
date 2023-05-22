/*const { calcularValorPorHora } = require('./valorHora')

test('retornar o valor arredondado correto dado o valor recebido por mês', () =>{

    expect(calcularValorPorHora(5000)).toBe(10)

})

describe('Valor por hora', () => {
    test('retorna o valor arredondado correto dado o valor recebido no mês', () => {
      const valorPorMes = 1300;
  
      const result = calcularValorPorHora(valorPorMes);
  
      expect(result).toEqual(8);
    });
  });*/

  const calcularValorTotalProjeto = require('./valorProjeto');
  const pacote = require('./pacote');

  jest.mock('./pacote');

  describe('valor do projeto', () => {
  test('retornar valor total para um projeto dada as funcionalidades', () => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');

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
    expect(pacote.calcularPacote).toHaveBeenCalled();
  });
});
