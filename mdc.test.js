const calcularMDC = require('./mdc');

test('Deve calcular MDC de 50 e 120 e retornar 10', () => {
    expect(calcularMDC(50, 120)).toBe(10);
});

test('Deve calcular MDC de 0 e 5 e retornar 5', () => {
    expect(calcularMDC(0, 5)).toBe(5);
});

test('Deve calcular MDC de 5 e 0 e retornar 5', () => {
    expect(calcularMDC(5, 0)).toBe(5);
});

test('Deve calcular MDC de 7 e 3 e retornar 1', () => {
    expect(calcularMDC(7, 3)).toBe(1);
});

test('Deve calcular MDC de 100 e 25 e retornar 25', () => {
    expect(calcularMDC(100, 25)).toBe(25);
});
