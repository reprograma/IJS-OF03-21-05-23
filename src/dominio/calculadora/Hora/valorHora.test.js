const { calcularValorPorHora } = require('./valorHora')

test('retornar o valor arredondado correto dado o valor recebido por mês', () => {
    expect(calcularValorPorHora(5000)).toBe(10)
})

describe('funcões para testar valor hora trabalhada', () =>  {
    test('retornar o valor arredondado correto dado o valor recebido por mês', () => {

        const valorPorMes = 5000
        const result = calcularValorPorHora(valorPorMes)
        expect(result).toEqual(29)
    })

})