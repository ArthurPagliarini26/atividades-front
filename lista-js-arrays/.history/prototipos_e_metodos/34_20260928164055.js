function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.descrever = function() {
    console.log(this.nome + " custa R$ " + this.preco);
}

let livro = new Produto("Harry Potter", 49.99);

livro.descrever();