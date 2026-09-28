function Guerreiro(nome) {
    this.nome = nome;
    this.vida = 100;
}

Guerreiro.prototype.atacar = function() {
    console.log("Atacando!");
}

let guerreiro1 = new Guerreiro("Arthur");
let guerreiro2 = new Guerreiro("Lancelot");

console.log();

