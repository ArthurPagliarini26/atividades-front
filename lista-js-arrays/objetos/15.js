const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2005,

    getIdade() {
        return "Idade: " + (2026 - carro.ano);
    },

    getDescricao() {
        return carro;
    }
};

console.log(carro.marca);
console.log(carro.ano = 2025);
console.log(carro.getIdade());
console.log(carro.getDescricao());



