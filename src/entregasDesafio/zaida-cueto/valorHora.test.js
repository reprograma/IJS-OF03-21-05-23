const {calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

const {calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe('Valor por hora', () => {
  test('retorna o valor aredondado correto dado o valor recebido no mes',() =>{
    const valorPorMes = 1300;
    const result =   calcularValorPorHora(valorPorMes);
     expect(result).toEqual(8)
  })
 });


