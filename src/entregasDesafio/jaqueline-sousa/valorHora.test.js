const { calcularValorPorHora } = require('./valorHora')

test('retornar o valor arredondado correto dado o valor recebido por mês', () =>{

    expect(calcularValorPorHora(5000)).toBe(10)

})

describe('Valor por hora', () => {
    test('retorna o valor arredondado correto dado o valor recebido no mês', () => {
      const valorPorMes = 1300;
  
      const result = calcularValorPorHora(valorPorMes);
  
      expect(result).toEqual(8);
    });
  });