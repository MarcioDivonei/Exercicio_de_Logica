//2.Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.


function indicesMaiorMenor(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 0; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}

module.exports = indicesMaiorMenor;
