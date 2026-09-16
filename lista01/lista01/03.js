const prompt = require("prompt-sync")();

let tempo = Number(prompt("Tempo em horas: "));
let velocidade = Number(prompt("Velocidade média: "));

let distancia = (tempo * velocidade);

console.log("Distância percorrida: " + distancia.toFixed(2) + "km");
