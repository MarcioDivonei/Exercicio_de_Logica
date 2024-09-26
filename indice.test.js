const indicesMaiorMenor = require('./indice');

test('deve retornar 0 para ambos os índices se o array tiver um único elemento', () => {
    const array = [10];
    const resultado = indicesMaiorMenor(array);
    expect(resultado).toEqual({ indiceMaior: 0, indiceMenor: 0 });
});

test('deve lidar corretamente com arrays com valores iguais', () => {
    const array = [5, 5, 5, 5];
    const resultado = indicesMaiorMenor(array);
    expect(resultado).toEqual({ indiceMaior: 0, indiceMenor: 0 });
});

test('deve retornar os índices do maior e menor valor em um array', () => {
    const array = [13, 16, 4, 12, 9];
    const resultado = indicesMaiorMenor(array);
    expect(resultado).toEqual({ indiceMaior: 1, indiceMenor: 2 });
});



test('deve retornar os índices corretos para um array com valores negativos', () => {
    const array = [-10, -20, -30, -5];
    const resultado = indicesMaiorMenor(array);
    expect(resultado).toEqual({ indiceMaior: 3, indiceMenor: 2 });
});
