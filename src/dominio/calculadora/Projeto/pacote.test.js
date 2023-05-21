const { calcularPacote } = require('./pacote');

describe('Calcular pacote correto para cada projeto', () => {
    test('Retorna pacote b�sico caso o n�mero total seja at� 50', () => {
        const totalDeHorasPorProjeto = 49;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico');
    });

    test('Retornar pacote b�sico caso o n�mero total de horas seja exatamente 50', () => {
        const totalDeHorasPorProjeto = 50;
        const result = calcularPacote(totalDeHorasPorProjeto);

        expect(result).toEqual('pacote_basico');
    });
});