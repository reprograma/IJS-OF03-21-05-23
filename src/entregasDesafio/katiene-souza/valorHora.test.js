const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe('valor por hora', () => {
    test('retorna o valor arredondado correto dado o valor recebido no mês', () => {
        const valorPorMes = 5000;
        const result = calcularValorPorHora(valorPorMes);
        expect(result).toEqual(29);
    });

    test("Verificando se o valor não é nulo", () => {
        const valorPorMes = 5000;
        const result = calcularValorPorHora(valorPorMes);
        expect(result).not.toBeNull();
    }); 
});
