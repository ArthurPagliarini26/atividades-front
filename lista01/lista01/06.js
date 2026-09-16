const prompt = require("prompt-sync")();

let numero = Number(prompt("Número: "));

if (numero > 0) {
    console.log(numero + " é positivo.");
} else if (numero < 0) {
    console.log(numero + " é negativo.");
} else {
    console.log(numero + " é zero.");
}