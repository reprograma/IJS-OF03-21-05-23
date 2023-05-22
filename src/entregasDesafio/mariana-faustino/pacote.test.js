const {calcularPacote} = require('../../dominio/calculadora/Projeto/pacote')

describe('Calcular pacote correto para cada projeto', () =>{
    test('Retorna pacote básico caso o número total seja até 50', () => {
        const totalDeHorasPorProjeto = 50
        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_basico')
    })
    test('Retorna pacote intermediário caso o número total seja de 51 até 100', () => {
        const totalDeHorasPorProjeto = 99
        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_intermediario')
    })
    test('Retorna pacote premium caso o número total seja 101 até 200', () => {
        const totalDeHorasPorProjeto = 150
        const result = calcularPacote(totalDeHorasPorProjeto)

        expect(result).toEqual('pacote_premium')
    })
    test('Lançar erro caso o total de horas ultrapasse 200', ()=>{
        const totalDeHorasPorProjeto = 206
        expect(()=> calcularPacote(totalDeHorasPorProjeto)).toThrow(Error)
    })
})
