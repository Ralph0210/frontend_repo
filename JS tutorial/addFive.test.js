const addFive = require('./module4');

test('returns the number pluses 5', () => {
    expect(addFive(10)).toBe(15)
});