const { calcularValorPorHora } = require('./valorHora')

describe('Lançar um erro para valores de renda mensal negativa', () => {

    const rendaMensal = -1000      

    test('Para valores negativos de renda mensal o valor será inválido para cálculo', () => {
          
        function valorPorHora() {
            calcularValorPorHora(rendaMensal);
        } 

        expect(valorPorHora).toThrow(Error)  

    })
})


