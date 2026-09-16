const prompt = require("prompt-sync")();

function sortearNumero(numero) {
  return Math.floor((Math.random() * numero) + 1);
}
let numero = Number(prompt("Número de 1 até: "));

let numeroSorteado = sortearNumero(numero);

let contador = null;
let tentativa = null;

while (tentativa != numeroSorteado) {
    tentativa = Number(prompt("Tente: "));
    contador++;

    if (tentativa == numeroSorteado) {
        console.log("Acertouuuu!!!");
    } else if (tentativa < 1 || tentativa > numero) {
        console.log("Esse número não ta nem entre os " + numero);
    } else if (tentativa > numeroSorteado) {
        console.log("Mais baixo!");
    } else if (tentativa < numeroSorteado) {
        console.log("Mais alto!");
    }
}

console.log("Número de tentativas até acertar: " + contador);