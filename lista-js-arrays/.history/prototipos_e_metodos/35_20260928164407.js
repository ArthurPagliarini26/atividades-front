function Guerreiro(nome) {
    this.nome = nome;
    this.vida = 100;
}

Guerreiro.prototype.atacar = function() {
    console.log("Atacando!");
}