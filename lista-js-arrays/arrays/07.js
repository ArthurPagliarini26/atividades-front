const prompt = require("prompt-sync")();

let n1 = Number(prompt("Número 1: "));
let n2 = Number(prompt("Número 2: "));
let n3 = Number(prompt("Número 3: "));

let array = [n1, n2, n3];

console.log("Array: " + array);

array.reverse();

console.log("Ao contrário: " + array);