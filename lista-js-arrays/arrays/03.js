let array = [1, 2, 2, 3, 3, 3, 4, 4];
let valor = 4;

function contarOcorrencias(array, valor) {
    let cont = 0;
    array.forEach(x => {
        if (x == valor) {
            cont++;
        }
    });
    return cont;
}

function teste(array, valor) {
    return array.filter(x => x == valor).length;
}

console.log("Numero: " + valor + " | " + "Ocorrências: " + contarOcorrencias(array, valor));
console.log("Numero: " + valor + " | " + "Ocorrências: " + teste(array, valor));
