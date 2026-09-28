let frutas = ["maçã", "banana", "laranja"];

console.log(frutas);

console.log(frutas[1]);

console.log(frutas.push("morango"));

console.log(frutas.shift(0));

console.log(frutas);

let numeros = [1,2,3,4,5,6,7,8,9,10];

numeros.push(11);

numeros.pop();

numeros.unshift(0);

numeros.shift(0);

let frutas2 = ["manga", "abacaxi", "melancia"];

let todasFrutas = frutas.concat(frutas2);

let novoArray = todasFrutas.slice(0, 2);

console.log(todasFrutas);

todasFrutas.splice(1, 1);

console.log(todasFrutas);

console.log(todasFrutas.indexOf("banana"));

let frutasComM = todasFrutas.filter(x =>  x.startsWith("m"));

console.log(frutasComM);

let dobroNumeros = numeros.map(x => x*2);

console.log(dobroNumeros);

todasFrutas.forEach((x, i) => console.log(i + " - " + x));




