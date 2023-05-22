const { calcularPacote } = require('./pacote'); 

describe('calcular pacote correto para cada projeto', () => {
    test('retorna pacote basico caso o número total seja até 50', () => {
        const totalDeHorasPorProjeto = 69
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico')
    })
})

test('retornar pacote básico caso o número total de horas seja exatamente 50', ()=> {
    const totalDeHorasPorProjeto = 50;

    const result = calcularPacote(totalDeHorasPorProjeto);

    expect(result).toEqual('pacote_basico')
})