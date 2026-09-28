let numero = 8;

function criarArray(numero) {
    let x = 1;
    let array = [];
    while(x <= numero) {
        array.push(x);
        x++;
    }
    return array;
}

console.log("Array: " + criarArray(numero));
