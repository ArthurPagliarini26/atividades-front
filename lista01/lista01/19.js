const prompt = require("prompt-sync")();

function vereficarPalindromo(palavra) {
    let palavraInvertida = palavra.split("").reverse().join("");
    
    if (palavra == palavraInvertida) {
        return true;
    }
    return false;
}

let palavra = prompt("Digite a palavra: ")

console.log("A palavra é um palíndromo? " + (vereficarPalindromo(palavra) ? "Sim" : "Não"));