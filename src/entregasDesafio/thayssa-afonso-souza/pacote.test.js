const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote');

describe('Calcular pacote correto para cada projeto', () => {
    test('Retorna pacote basico caso o numero total seja ate 50', () => {
        const totalDeHorasPorProjeto = 49;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico');
    });

    test('Retornar pacote basico caso o numero total de horas seja exatamente 50', () => {
        const totalDeHorasPorProjeto = 50;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico');
    });

    test('Retornar pacote premium caso o numero total de horas seja acima de 100', () => {
        const totalDeHorasPorProjeto = 170;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toStrictEqual('pacote_premium');
    });

    test('Retornar um erro por estar eviando um numero total de horas acima de 50 e menor ou igual a 100, e definindo que o pacote premium é o valor esperado (o correto é pacote intermediario)', () => {
        const totalDeHorasPorProjeto = 88;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toBe('pacote_premium'); //o correto é pacote intermediario
    });
});