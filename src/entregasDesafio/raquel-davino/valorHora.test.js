const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

// test('retornar o valor arredondado correto dado o valor recebido por mês', ()=>{

//     expect(calcularValorPorHora(5000).toBe(10));
// });

describe('funções para testar valor hora trabalhada', () => {
    test("retornar o valor arredondado dado o valor recebido por mês", () => {        
        const valorporMes = 5000;
        const resultado = calcularValorPorHora(valorporMes);
    
        expect(resultado).toEqual(29);
    });
});





