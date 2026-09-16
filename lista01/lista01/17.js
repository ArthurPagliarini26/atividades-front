const prompt = require("prompt-sync")();

function ehPar(numero) {
    if (numero % 2 == 0) {
        return true;
    } 
    return false;
}

let numero = Number(prompt("Número para ver se é par: "));

if (ehPar(numero)) {
    console.log("É par.");
} else {
    console.log("É ímpar.");
}