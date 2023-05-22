const { calcularValorPorHora } = require('./valorHora')

/* Modo 1: */

/*test('Retornar o valor arredondado correto dado o valor recebido por mês', () => {

    expect(calcularValorPorHora(5000)) . toBe(10);

});*/

/* Modo 2: */

describe('Funções para testa valor hora trabalhada', () =>{
    
    const valorPorMes = 5000

    const result = calcularValorPorHora(valorPorMes)
    
    test("Retornar o valor arredondado correto dado o valor recebido por mês", () => {   
    expect(result) . toEqual(29)
})

})