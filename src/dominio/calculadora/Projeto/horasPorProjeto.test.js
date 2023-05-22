const { calcularHorasDeProjeto } = require('./horasPorProjeto');

describe('Cálculo de horas totais para finalizar um projeto', () => {
  test('Dado um array com as funcionalidades desejadas no projeto, retornar a soma das horas das funcionalidades', () => {
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
    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(78);
  });

  test('Verificar se a função retorna 0 quando o array de funcionalidades estiver vazio', () => {
    const funcionalidades = [];
    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(0);
  });

  test('Verificar se a função retorna 0 quando o array de funcionalidades for nulo', () => {
    const funcionalidades = null;
    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(0);
  });

  test('Verificar se a função retorna 0 quando o array de funcionalidades for undefined', () => {
    const funcionalidades = undefined;
    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(0);
  });
});