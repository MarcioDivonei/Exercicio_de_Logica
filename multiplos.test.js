const somaMultiplos = require('./multiplos');

test('Deve retornar a soma correta dos múltiplos de 5 e 7 abaixo de 1000', () => {
    const resultado = somaMultiplos();
    expect(resultado).toBe(170571);
});
