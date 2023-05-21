const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')
const { HORAS_POR_DIA } = require('../../dominio/calculadora/constantes/constantes')

describe('funções para testar o valor por hora trabalhada', () => {
  test('retornar o valor arredondado correto dado o valor recebido por mês', () => {
    const valorPorMes = 5000
    const result = calcularValorPorHora(valorPorMes)
    expect(result).toEqual(29)
  })
  test('retornar dias de trabalho, dada renda mensal e o valor por hora desejados', () => {
    const valorPorMes = 7200
    const calcularValorPorHora = 50
    const calcularDiasDeTrabalho = valorPorMes / (calcularValorPorHora * HORAS_POR_DIA)
    const result = calcularDiasDeTrabalho
    expect(result).toBe(18)
  })
})