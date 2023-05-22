
const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('calcularPacote', () => {
  test('Retorna pacote básico caso o número total seja até 50', () => {
    const totalDeHoras = 50;
    const pacoteEsperado = 'pacote_basico'

    expect(calcularPacote(totalDeHoras)).toBe(pacoteEsperado);
  });

  test('Retorna pacote intermediario caso o número total seja até 100', () => {
    const totalDeHoras = 100;
    expect(calcularPacote(totalDeHoras)).toEqual('pacote_intermediario');
  });

  test('Retorna pacote premium caso o número total seja até 200', () => {
    const totalDeHoras = 200;
      expect(calcularPacote(totalDeHoras)).toEqual('pacote_premium');
  });
});

// const { calcularPacote } = require('./pacote');

// describe('Calcular pacote correto para cada projeto', () =>{
//    /* test('Retorna pacote básico caso o número total seja até 50' ,() =>{
//      const totalDeHorasPorProjeto = 69
//      const result = calcularPacote(totalDeHorasPorProjeto);

//      expect(result).toEqual('pacote_basico')

//     })*/

//     test('Retornar pacote básico caso o número total de horas seja exatamente 50' , () =>{
//         const totalDeHorasPorProjeto = 50

//         const result = calcularPacote(totalDeHorasPorProjeto);

//         expect(result).toEqual('pacote_basico')
//     })
// })


