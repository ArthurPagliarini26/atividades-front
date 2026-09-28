let array = [1, 2, 3, 4, 5];
let numero = 2;

function funcao(array, numero) {
    let maiores = array.filter(x => {
        return x > numero;
    });
    return maiores;
}

console.log("Array: " + array);
console.log("Maiores: " + funcao(array, numero));