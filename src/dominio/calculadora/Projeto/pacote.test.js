const { calcularPacote } = require('./pacote');

describe('calcular pacote correto', () => {
    test ('retorna pacote',() => {
        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico')
    })
})