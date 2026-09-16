const prompt = require("prompt-sync")();

let saldo = 1000;

menu();

function menu() {
    while(true) {
        console.log("=== CAIXA ELETRÔNICO ===");
        console.log("1 - Ver saldo");
        console.log("2 - Depositar dinheiro");
        console.log("3 - Sacar dinheiro");
        console.log("0 - Sair");
        let opcao = Number(prompt("Escolha: "));

        if (opcao == 0) {
            console.log("Saindo...");
            break;
        }

        switch (opcao) {
            case 1: 
                verSaldo();
                break;

            case 2: 
                let valorDeposito = Number(prompt("Valor para depósito: "))
                depositar(valorDeposito);
                break;

            case 3: 
                let valorSque = Number(prompt("Valor para saque: "))
                sacar(valorSque);
                break;

            default:
                console.log("Opção inválida.");
                break;
        }
    }
}

function verSaldo() {
    return console.log("Saldo atual: R$" + saldo.toFixed(2));
}

function depositar(valor) {
    saldo += valor;
    return console.log("Depósito teve sucesso.");
}

function sacar(valor) {
    if (valor > saldo) {
        return console.log("Saldo insuficiente.");
    } else {
        saldo -= valor;
        return console.log("Saque teve sucesso.");
    }
}


