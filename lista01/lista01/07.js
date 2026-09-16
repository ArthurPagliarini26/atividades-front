const prompt = require("prompt-sync")();

let salario = Number(prompt("Salário: "));
let prestacao = Number(prompt("Valor da prestação: "));

if (prestacao > (salario * 0.2)) {
    console.log("Espréstimo não pode ser concedido.");
} else {
    console.log("Espréstimo pode ser concedido.");
}