const {calcularValorPorHora} = require('./valorHora')


test('rotornar o valor arrendodado por mes', () => {
    expect(calcularValorPorHora(5000)).tobe(10)

})
describe('Funções para testar hora trabalhada',()=>{
    test("rotornar o valor arrendodado por mes", ()=>{
        const valorPorMes = 1300;

        const result = calcularValorPorHora(valorPorMes)
        expect(result).toEqual(8);
    });
});