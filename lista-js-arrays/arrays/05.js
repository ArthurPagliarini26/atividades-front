let frutas = ["maçã", "banana", "laranja"];

console.log("Segundo elemento: " + frutas[1]);

frutas.push("manga");

console.log("Adicionando manga: " + frutas);

frutas.shift();

console.log("Removendo o primeiro elemento: " + frutas);

console.log("Tamanho do array: " + frutas.length);

frutas.forEach((fruta, i) => {
    console.log(i + " - " + fruta);
})

let tamanhoFrutas = frutas.map((fruta) => {
    return fruta.length;
})

console.log("Tamanho de cada string fruta: " + tamanhoFrutas);

let maiorDeCinco = frutas.filter((fruta) => {
    return fruta.length > 5;
})

console.log("Frutas com mais de 5 caracteres: " + maiorDeCinco);

function somaNumeros(array) {
    return array.reduce((total, numero) => {
        return total + numero;
    })
}

console.log("Soma numeros: " + somaNumeros([1, 2, 3]));

