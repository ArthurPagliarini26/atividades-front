const prompt = require("prompt-sync")();

let listaLivros = [];
let opcao;

do {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar livro");
    console.log("2 - Listar todos os livros");
    console.log("3 - Listar livros disponíveis");
    console.log("4 - Buscar livro pelo título");
    console.log("5 - Emprestar livro");
    console.log("6 - Devolver livro");
    console.log("0 - Sair");

    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            cadastrarLivro();
            break;

        case 2:
            listarLivros();
            break;

        case 3:
            listarDisponiveis();
            break;

        case 4:
            buscarLivro();
            break;

        case 5:
            emprestarLivro();
            break;

        case 6:
            devolverLivro();
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida!");
    }

} while (opcao !== 0);


function cadastrarLivro() {
    let titulo = prompt("Título: ");
    let autor = prompt("Autor: ");
    let ano = Number(prompt("Ano: "));

    listaLivros.push({
        titulo: titulo,
        autor: autor,
        ano: ano,
        disponivel: true
    });

    console.log("Livro cadastrado com sucesso!");
}


function listarLivros() {
    listaLivros.forEach(function(item) {
        console.log(item);
    });
}


function listarDisponiveis() {
    listaLivros.forEach(function(item) {
        if (item.disponivel === true) {
            console.log(item);
        }
    });
}


function buscarLivro() {
    let titulo = prompt("Digite o título: ");

    let livro = listaLivros.find(function(item) {
        return item.titulo === titulo;
    });

    if (livro) {
        console.log(livro);
    } else {
        console.log("Livro não encontrado!");
    }
}


function emprestarLivro() {
    let titulo = prompt("Digite o título do livro: ");

    let livro = listaLivros.find(function(item) {
        return item.titulo === titulo;
    });

    if (!livro) {
        console.log("Livro não encontrado!");
        return;
    }

    if (!livro.disponivel) {
        console.log("O livro já está emprestado!");
        return;
    }

    livro.disponivel = false;

    console.log("Livro emprestado com sucesso!");
}


function devolverLivro() {
    let titulo = prompt("Digite o título do livro: ");

    let livro = listaLivros.find(function(item) {
        return item.titulo === titulo;
    });

    if (!livro) {
        console.log("Livro não encontrado!");
        return;
    }

    livro.disponivel = true;

    console.log("Livro devolvido com sucesso!");
}