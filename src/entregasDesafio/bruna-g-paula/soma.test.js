const soma = require('./soma');

describe('Retorno da soma de dois valores', () => {
    test('Soma de 2 + 3 é 5 ', () => {
        expect(soma(2, 3)).toBe(5)
    });
});