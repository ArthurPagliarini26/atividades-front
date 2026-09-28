const pessoa = {
    nome: "Arthur",
    idade: "17",
    profissao: "Não tem",
    hobbies: ["jogar, pintar, comer, lavar"],

    setNome(novoNome) {
        this.nome = novoNome;
        return "Seu novo nome é " + this.nome;
    }
}

console.log(pessoa);
console.log(pessoa.setNome("Igor"));


