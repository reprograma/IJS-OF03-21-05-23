const { calcularValorTotalProjeto } = require('../../dominio/calculadora/Projeto/valorProjeto')

describe('funções para calcular os valores base e total do projeto segundo funcionalidades e pacotes', () => {
  test('retornar valor total para um projeto dadas as funcionalidades no pacote básico', () => {
    const funcionalidades = [
      // a soma dá 40 (pacote básico)
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'ssr'
    ]
    const valorHora = 75
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(3300)
  })
  test('retornar valor total para um projeto dadas as funcionalidades no pacote intermediário', () => {
    const funcionalidades = [
      // a soma dá 80 (pacote intermediário)
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'formulario',
      'ssr'
    ]
    const valorHora = 75
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(7200)
  })
  test('retornar valor total para um projeto dadas as funcionalidades no pacote premium', () => {
    const funcionalidades = [
      // a soma dá 112 (pacote premium)
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'ssr',
      'integracao_api_propria'
    ]
    const valorHora = 75
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(12600) 
  })

  // para testar case erro
  test('retornar valor total para um projeto dadas as funcionalidades no pacote premium', () => {
    const funcionalidades = [
      // a soma dá 112 (pacote premium)
      'setup',
      'formulario',
      'responsividade',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'ssr',
      'integracao_api_propria'
    ]
    const valorHora = 75
    const result = calcularValorTotalProjeto(funcionalidades, valorHora)
    expect(result).toEqual(8400) //8400 seria o valor base, sem acrescimo das taxas contratuais
  })
})