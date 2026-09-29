const prompt = require("prompt-sync")();

let listaProdutos = [];

do {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar produto");
    console.log("2 - Listar produtos");
    console.log("3 - Buscar produto pelo código");
    console.log("4 - Adicionar estoque");
    console.log("5 - Retirar estoque");
    console.log("6 - Mostrar valor do estoque");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: 
            cadastrarProduto();
            break;
        case 2: 
            listarProdutos();
            break;
        case 3:
            let codigoA = Number(prompt("Código: "));
            console.log(buscarPeloCodigo(codigoA));
            break;
        case 4:
            let codigoB = Number(prompt("Código: "));
            let quantidadeA = Number(prompt("Quantidade: "));
            adicionarEstoque(codigoB, quantidadeA);
            break;
        case 5:
            let codigoC = Number(prompt("Código: "));
            let quantidadeB = Number(prompt("Quantidade: "));
            retirarEstoque(codigoC, quantidadeB);
            break;
        case 6:
            mostrarValorEstoque()
            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");   
    }
} while(opcao !== 0);

function cadastrarProduto() {
    let codigo = Number(prompt("Código: "));
    let nome = prompt("Nome: ");
    let preco = Number(prompt("Preço: "));
    let quantidade = Number(prompt("Quantidade: "));

    produto = buscarPeloCodigo(codigo);

    if (produto) {
        console.log("O produto já existe.");
        return;
    }

    listaProdutos.push({
        produto: {
            codigo: codigo,
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }
    });

    console.log("Produto cadastrado com sucesso!");
}

function listarProdutos() {
    listaProdutos.forEach(function(item) {
        console.log("Produto: ");
        console.log(item.produto);
    })
}

function buscarPeloCodigo(codigo) {
    return listaProdutos.find(function(item) {
            return item.produto.codigo === codigo;
    })
}

function adicionarEstoque(codigo, quantidade) {
    produto = buscarPeloCodigo(codigo);

    produto.produto.quantidade += quantidade;
    
    console.log("Estoque adicionado com sucesso!");
}

function retirarEstoque(codigo, quantidade) {
    produto = buscarPeloCodigo(codigo);

    produto.produto.quantidade -= quantidade;
    
    console.log("Estoque retirado com sucesso!");
}

function mostrarValorEstoque() {
    soma = 0;
    listaProdutos.forEach(function(item) {
        soma += item.produto.preco * item.produto.quantidade;
    })
    console.log("Estoque total: " + soma);
}