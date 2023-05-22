const { calcularValorTotalProjeto } = require('./valorProjeto');
const pacote = require('./pacote');

const {
  DIAS_UTEIS_NO_MES,
  HORAS_POR_FUNCIONALIDADE,
  TAXAS_CONTRATUAIS_POR_PACOTE
} = require('../constantes/constantes'); 
jest.mock('./pacote.js');

describe('valor do projeto', () => {
  beforeEach(() => {
    pacote.calcularPacote.mockReturnValue('pacote_basico');
  });

  test('retornar valor total para um projeto dada as funcionalidades', () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'otimizacao_seo',
      'integracao_api_propria',
      'formulario',
      'ssr'
    ];
    const valorHora = 70;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(3696);
  });

  test('verificar se a função "calcularPacote" é chamada corretamente', () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'otimizacao_seo',
      'integracao_api_propria',
      'formulario',
      'ssr'
    ];
    const valorHora = 70;

    calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(pacote.calcularPacote).toHaveBeenCalledWith(funcionalidades);
  });

  test('verificar se o valor total do projeto é calculado corretamente', () => {
    const funcionalidades = [
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'otimizacao_seo',
      'integracao_api_propria',
      'formulario',
      'ssr'
    ];
    const valorHora = 70;
    const totalHorasFuncionalidades = funcionalidades.reduce(
      (total, funcionalidade) => total + HORAS_POR_FUNCIONALIDADE[funcionalidade],
      0
    );
    const totalHorasProjeto = totalHorasFuncionalidades * DIAS_UTEIS_NO_MES;
    const pacoteSelecionado = 'pacote_basico';
    const taxaContratual = TAXAS_CONTRATUAIS_POR_PACOTE[pacoteSelecionado];
    const valorTotal = totalHorasProjeto * valorHora * taxaContratual;

    const result = calcularValorTotalProjeto(funcionalidades, valorHora);

    expect(result).toEqual(valorTotal);
  });
});