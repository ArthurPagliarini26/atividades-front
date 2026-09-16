const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Número 1: "));
let numero2 = Number(prompt("Número 2: "));
let operacao = prompt("Operação (+, -, *, /): ")

switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        console.log(`Resultado: ${resultado}`);
        break;

    case "-":
        resultado = numero1 - numero2;
        console.log(`Resultado: ${resultado}`);
        break;

    case "*":
        resultado = numero1 * numero2;
        console.log(`Resultado: ${resultado}`);
        break;

    case "/":
        if (numero2 == 0) {
            console.log("Não é possível dividir por 0.");
            break;
        }

        resultado = numero1 / numero2;
        console.log(`Resultado: ${resultado}`);
        break;

    default:
        console.log("Opção inválida."); 
}