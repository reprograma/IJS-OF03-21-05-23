const suma = require('./soma');

test('a suma 1 + 2 é  3', () => {
  expect(suma(1, 2)).toBe(3);
});