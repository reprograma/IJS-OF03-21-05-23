const { calcularPacote } = require('./pacote');

describe('Caclula pacote de horas por projeto', () => {
    test('Para 20hrs horas de trabalho, deve retornar pacote básico', () => {
        expect(calcularPacote(20)).toBe('pacote_basico')
    });
    test('Para 20hrs horas de trabalho, deve retornar pacote básico', () => {
        expect(calcularPacote(8)).toBe('pacote_basico')
    });
    test('Para 140hrs horas de trabalho, deve retornar pacote premium', () => {
        expect(calcularPacote(140)).toBe('pacote_premium')
    });
    test('Para 90hrs horas de trabalho, deve retornar pacote intermediário', () => {
        expect(calcularPacote(90)).toBe('pacote_intermediario')
    });
    test('Para 50hrs horas de trabalho, deve retornar pacote intermediário', () => {
        expect(calcularPacote(50)).toBe('pacote_basico')
    });
});