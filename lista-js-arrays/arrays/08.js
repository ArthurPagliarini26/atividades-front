let array = [4,3,2,1,7,2];

function ordenar(array) {
    for (let i = 0; i <= array.length; i++) {
        for (let j = i; j < array.length; j++) {
            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log("Ordenado: " + ordenar(array));
