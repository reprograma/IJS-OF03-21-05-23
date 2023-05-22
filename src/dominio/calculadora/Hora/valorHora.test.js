const { calcularValorPorHora } = require('./valorHora')

test('retornar o valor arredondado correto dado o valor recebido por mês', () =>{
    expect(calcularValorPorHora(5000)).toBe(29)
})

describe('Funções para testar valor hora trabalhada', () =>{
    test("retornar o valor arredondado correto dado o valor recebido por mês", () =>{
        const valorPorMes = 5000
        const result = calcularValorPorHora(valorPorMes)
        expect(result).toEqual(29)
    })
})