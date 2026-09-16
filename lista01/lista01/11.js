const prompt = require("prompt-sync")();

let numero = Number(prompt("Tabuada do número: "));

for (let i = 1; i <= 10; i++) {
    console.log(`${i} * ${numero} = ${i * numero}`);
}