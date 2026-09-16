const prompt = require("prompt-sync")();

let graus = Number(prompt("Temperatura em °C: "));

let fahrenheit = (graus * 1.8) + 32;

console.log("Temperatura em Fahrenheit: " + fahrenheit + "°F");