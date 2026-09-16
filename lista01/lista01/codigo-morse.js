const prompt = require("prompt-sync")();

function converter(letra) {
        switch (letra) {
            case "A": return ".-";
            case "B": return "-...";
            case "C": return "-.-.";
            case "D": return "-..";
            case "E": return ".";
            case "F": return "..-.";
            case "G": return "--.";
            case "H": return "....";
            case "I": return "..";
            case "J": return ".---";
            case "K": return "-.-";
            case "L": return ".-..";
            case "M": return "--";
            case "N": return "-.";
            case "O": return "---";
            case "P": return ".--.";
            case "Q": return "--.-";
            case "R": return ".-.";
            case "S": return "...";
            case "T": return "-";
            case "U": return "..-";
            case "V": return "...-";
            case "W": return ".--";
            case "X": return "-..-";
            case "Y": return "-.--";
            case "Z": return "--..";
        }
}

let palavraDigitada = prompt("Palavra: ");
let listaLetras = palavraDigitada.toUpperCase().split('');
let listaMorse = [];

for (let i = 0; i < listaLetras.length; i++) {
    listaMorse.push(converter(listaLetras[i]));
}

console.log("Palavra digitada: " + palavraDigitada);
console.log("Morse: " + listaMorse.join(" "));

