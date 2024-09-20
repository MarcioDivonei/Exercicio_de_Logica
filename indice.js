//2.Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor.


function indicesMaiorMenor(array) {
    let indiceMaior = 0;
    let indiceMenor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[indiceMaior]) {
            indiceMaior = i;
        }
        if (array[i] < array[indiceMenor]) {
            indiceMenor = i;
        }
    }

    return { indiceMaior, indiceMenor };
}


const array = [13, 16, 4, 12, 9];
const indices = indicesMaiorMenor(array);
console.log(indices); 