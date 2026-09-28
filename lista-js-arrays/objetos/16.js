const conta = {
    saldo: 1000,
    titular: "Arthur",

    depositar(valor) {
        this.saldo += valor;
        return "Valor de " + valor + " reais depositado. | Saldo atual: " + this.saldo;
    },

    sacar(valor) {
         this.saldo -= valor;
        return "Valor de " + valor + " reais sacado. | Saldo atual: " + this.saldo;
    },

    verSaldo() {
        return "Saldo atual: " + this.saldo;
    }
}

console.log(conta.depositar(400));
console.log(conta.sacar(100));
console.log(conta.verSaldo());

