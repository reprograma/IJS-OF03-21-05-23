const soma = require('./soma');

test('A soma de 1 + 2 � igual a 3', () => {
    expect(soma(1, 2)).toBe(3);
});