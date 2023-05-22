const { calcularRiscoBurnout } = require ('../../dominio/calculadora/Projeto/riscoBurnout')

describe('função para calcular risco de burnout', () => {
    test('ao informar o total de horas trabalhadas no mês, retornar se existe risco de burnout', () => {

        const horasTrabalhadasPorMes = 200;
        const resultado = calcularRiscoBurnout(horasTrabalhadasPorMes);
        expect(resultado).toBeTruthy();

    })
})

