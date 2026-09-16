const prompt = require("prompt-sync")();

let preco = Number(prompt("Preço atual: "));

let reajuste = preco * 0.15;

console.log("Preço após o reajuste: R$" + (preco + reajuste).toFixed(2));
