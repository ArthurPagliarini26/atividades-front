array = [3, 2, 1 , 5, 7];

function ordenar(array) {
     for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {

            if (array[i] > array[j]) {
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    }
    return array;
}

console.log(ordenar(array));
