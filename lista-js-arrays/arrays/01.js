const prompt = require("prompt-sync")();

function calcularMedia(numeros) {
    let soma = 0;

    numeros.forEach(nota => {
        soma += nota;
    });

    return soma / numeros.length;
}

console.log("Média: " + (calcularMedia([1, 2, 3, 4, 5])));

function calcularMediaTeste(numeros) {
    let soma = numeros.reduce((total, numero) => total + numero, 0);
    return soma / numeros.length;
}

console.log("Média: " + (calcularMediaTeste([1, 2, 3, 4, 5])));