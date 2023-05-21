const {MAX_HORAS_POR_PACOTE} = require('../constantes')
const { calcularValorTotalProjeto } = require('./valorProjeto')

const calcularPacote = (TotalDeHorasPorProjeto) =>{
    test('Retorna pacote basico com o numero total', () =>
     {
        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico')
      })
}