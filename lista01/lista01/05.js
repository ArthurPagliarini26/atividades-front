const prompt = require("prompt-sync")();

let nome = prompt("Nome: ");
let profissao = prompt("Profissão: ");
let ano = Number(prompt("Ano de nascimento: "));

let idade = new Date().getFullYear() - ano;

console.log(`Seu nome é ${nome}, você tem ${idade} anos e trabalha sendo ${profissao.toLowerCase()}. Boa sorte na sua jornada!`);
