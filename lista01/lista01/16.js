const prompt = require("prompt-sync")();

function adicionar(num1, num2) {
    return num1 + num2;
}

function subtrair(num1, num2) {
    return num1 - num2;
}

const multiplicar = (num1, num2) => num1 * num2;

let numero1 = Number(prompt("Número 1: "));
let numero2 = Number(prompt("Número 2: "));

console.log("Soma: " + adicionar(numero1, numero2));
console.log("Subtração: " + subtrair(numero1, numero2));
console.log("Multiplicação: " + multiplicar(numero1, numero2));

