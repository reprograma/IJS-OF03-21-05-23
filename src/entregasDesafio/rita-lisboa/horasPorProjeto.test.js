const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('funções para calcular as horas totais para finalizar um projeto', () => {
// para testar case acerto
  test('dado um array de funcionalidades desejadas no projeto, retornar a soma das horas da funcionalidades', () => {
    const funcionalidades =[
      'setup',
      'responsividade',
      'construcao_1_pagina',
      'formulario',
      'ssr'
    ]
    const result = calcularHorasDeProjeto(funcionalidades)
    expect(result).toEqual(56)
  })
  test('Calcular horas com funcionalidades que não existe', () => {
    const listaFuncionalidadesNaoExiste = ['teste']
    expect(calcularHorasDeProjeto(listaFuncionalidadesNaoExiste)).toBeNaN()
  })
})

