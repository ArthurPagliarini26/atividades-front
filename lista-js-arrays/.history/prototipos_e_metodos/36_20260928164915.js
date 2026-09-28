let pessoa = {
    nome: "Arthur",
    anoNascimento: 2009,
    apresentar: function() {
        let idade =  2025 - this.anoNascimento;
        console.log("Olá, meu nome é " + this.nome );
        
    }
}
