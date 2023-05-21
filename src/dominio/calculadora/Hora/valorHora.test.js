const {calcularValorPorHora} = require('./valorHora')

// test('retornar o valor arredondado correto dado o valor recebido por mes', () =>{

    expect(calcularValorPorHora(5000)).toBe(29)
// })

describe('Valor por hora', () => {
   
    test("retornar o valor arredondado correto dado o valor recebido por mes",() => {
    const valorPorMes = 5000
    const result = calcularValorPorHora(valorPorMes)
    
  expect(result).toEqual(29);
    });

});