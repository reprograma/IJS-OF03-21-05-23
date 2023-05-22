const { calcularValorTotalProjeto, calcularValorBaseProjeto } = require("./valorProjeto");
const { calcularHorasDeProjeto,  } = require('../../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require("../../../dominio/calculadora/Projeto/pacote");


describe('Testar função calcularValorBaseProjeto', () => {

  const totalDeHorasPorProjeto = 72
  const valorHora = 29
  const result = calcularValorBaseProjeto(totalDeHorasPorProjeto, valorHora)

  it('função deve fazer calculo correto de valor base projeto', () => {
    expect(result).toEqual(2088)
  }),

    it('função não deve retornar valor undefined', () => {
      expect(result).toBeDefined()
    })
})

describe('Testar função calcularValorTotalProjeto para opção pacote intermediario (12%) ', () => {

  const totalDeHorasPorProjeto = 72
  const valorHora = 29
  const valorBase = 2088
  const TAXAS_CONTRATUAIS_POR_PACOTE_MOCK = {
    pacote_basico: 1.1, // 10%
    pacote_intermediario: 1.2, // 12%
    pacote_premium: 1.5 // 15%
  }

  const funcionalidades = [
    'setup',
    'responsividade',
    'construcao_1_pagina',
    'formulario',
    'ssr',
    'integracao_api_propria'
  ]


  it('função calcularHorasDeProjeto deve trazer valor correto', () => {

    const result = calcularHorasDeProjeto(funcionalidades);

    expect(result).toEqual(72)
  }),

    it("função calcularPacote deve trazer valor correto de pacote", () => {

      expect(calcularPacote(totalDeHorasPorProjeto)).toEqual("pacote_intermediario");
    }),

    it("deve calcular método Math.round e retornar valor arredondado do pacote correto ", () => {

      const result = Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE_MOCK.pacote_intermediario)

      expect(result).toBe(2506)
    }),

    it("deve método Math.round e retornar valor tipo number", () => {

      const result = Math.round(valorBase * TAXAS_CONTRATUAIS_POR_PACOTE_MOCK.pacote_intermediario)

      expect(result).not.toBeNaN()
    }),

    it("deve retornar valor total do projeto", () => {

      const result = calcularValorTotalProjeto(funcionalidades, valorHora)

      expect(result).toBe(2506)
    }),

    it("deve retornar valor total do projeto", () => {

      const result = calcularValorTotalProjeto(funcionalidades, valorHora)

      expect(result).not.toBeUndefined()
    })
})







