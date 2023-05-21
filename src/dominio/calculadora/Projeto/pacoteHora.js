const {MAX_HORAS_POR_PACOTE} = require('../constantes')
const { calcularValorTotalProjeto } = require('./valorProjeto')

const calcularPacote = (TotalDeHorasPorProjeto) =>{
    test('Retorna pacote basico com o numero total', () =>
     {
        const totalDeHorasPorProjeto = 49
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico')
      })

      test('Retornar pacote básico caso o número total de horas seja exatamente 50' , () =>{
        const totalDeHorasPorProjeto = 50

        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico')
    })

}
//tudo testado
//vários testes