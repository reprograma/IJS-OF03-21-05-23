const { calcularValorPorHora} = require("./valorHora")

test( "retornar o valor arrendondado correto dado o valor recebido por mÊs",() => {
    expect(calcularValorPorHora(5000)).toBe(10)
});

describe("valor por hora", () => {
    test("retorna valor hora",() => {
        const valorPorMes = 1300;

        const  result = calcularValorPorHora(valorPorMes);
        
        expect(result).toEqual(8);
    })
})
