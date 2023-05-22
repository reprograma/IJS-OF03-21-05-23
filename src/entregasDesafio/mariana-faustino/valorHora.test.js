const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe('Funções para testar valor hora trabalhada', () =>{
    test('retornar o valor arredondado correto dado o valor recebido por mês', () =>{
    expect(calcularValorPorHora(5000)).toBe(29) //usando toBe
})
    test("retornar o valor arredondado correto dado o valor recebido por mês", () =>{
        const valorPorMes = 5000
        const result = calcularValorPorHora(valorPorMes)
        expect(result).toEqual(29) //usando toEqual
    })
    test("lançar erro caso a renda mensal seja menor ou igual a zero.", ()=>{
        expect(()=> calcularValorPorHora(0)).toThrow(Error)
    })
})