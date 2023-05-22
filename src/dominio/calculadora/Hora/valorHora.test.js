const {calcularValorPorHora}=require('./valorHora')

describe('test function calcularValorPorHora', ()=>{
    it('return correct value', ()=>{

        const valorPorMes = 5000

        const result = calcularValorPorHora(valorPorMes)

        expect(result).toEqual(29)
    })
})