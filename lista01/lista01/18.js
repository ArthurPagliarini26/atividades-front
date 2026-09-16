const prompt = require("prompt-sync")();

function fatorial(numero) {
    let resultado = 1;

    for (let i = 1; i <= numero; i++) {
        resultado *= i
    }
    return resultado;
}

let numero = Number(prompt("Número: "));
console.log("Fatorial: " + fatorial(numero));
