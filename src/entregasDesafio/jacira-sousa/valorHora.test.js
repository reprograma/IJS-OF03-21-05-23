/*RODAR OS TESTES SEPARADAMENTE*/

// teste com valor hora correto
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

test('retornar o valor arredondado correto dado o valor recebido por mês', () =>{

    expect(calcularValorPorHora(5000)).toBe(29);

})

//teste valor hora incorreto [rodando junto com os demais testes estoura um erro]
const { calcularValorPorHora } = require('./valorHora');

test('retornar o valor arredondado correto dado o valor recebido por mês', () =>{

    expect(calcularValorPorHora(5000)).toBe(10);

})


//outra forma de teste correta
describe('Valor por hora', () => {
    test('retorna o valor hora', () => {
      const valorPorMes = 1300;
  
      const result = calcularValorPorHora(valorPorMes);
  
      expect(result).toEqual(8);
    });
  });



// teste com valor hora correto
  describe('Valor por hora', () => {
    test('retorna o valor hora', () => {
      const valorPorMes = 5000;
  
      const result = calcularValorPorHora(valorPorMes);
  
      expect(result).toEqual(29);
    });
  });


  
// teste com valor hora incorreto
describe('Valor por hora', () => {
  test('retorna o valor hora', () => {
    const valorPorMes = 5000;

    const result = calcularValorPorHora(valorPorMes);

    expect(result).toEqual(30);
  });
});

