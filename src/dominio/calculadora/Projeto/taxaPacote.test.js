
const {calcularTaxaPacote} = require('./taxaPacote');

/* const calcularValorBaseProjeto = (totalDeHorasPorProjeto, valorHora) => {
    return totalDeHorasPorProjeto * valorHora;
}; */

describe('Vai retornar a taxa contratual por pacote', () => {

    test('Retornar pacote básico caso a taxa contratual seja 10%', () => {
        const pacote = 1.1
        const result = calcularTaxaPacote(pacote);
        
        expect(result) . toEqual('pacote_basico')
    })
})