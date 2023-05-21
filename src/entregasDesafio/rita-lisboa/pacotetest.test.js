const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('funções para calcular o pacote para cada projeto ', () => {
  // para testar case acerto
  test('retorna pacote básico caso o numero total seja até 50', () => {
    const totalDeHorasPorProjeto = 46
    const result = calcularPacote(totalDeHorasPorProjeto)
    expect(result).toEqual('pacote_basico')
  })
  // para testar case acerto
  test('Retorna pacote intermediário caso o número total seja até 100', () =>{
    const totalDeHorasPorProjeto = 100
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_intermediario')
  })
// para testar case erro
  test('Retorna pacote premium caso o número total seja até 100', () =>{
    const totalDeHorasPorProjeto = 100
    const result = calcularPacote(totalDeHorasPorProjeto);
    expect(result).toEqual('pacote_premium')
  })
})