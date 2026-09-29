const prompt = require("prompt-sync")();

let pedidos = [];

let cardapio = [
    {codigo: 1, nome: "Pizza", preco: 50},
    {codigo: 2, nome: "Pão", preco: 5},
    {codigo: 3, nome: "Carne", preco: 100},
    {codigo: 4, nome: "Queijo", preco: 20},
    {codigo: 5, nome: "Lambda", preco: 500}
]


do {
    console.log("\n=== MENU ===");
    console.log("1 - Mostrar cardápio");
    console.log("2 - Criar pedido");
    console.log("3 - Listar pedidos");
    console.log("4 - Buscar pedido pelo número");
    console.log("5 - Mostrar faturamento total");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1: 
            mostrarCardapio();
            break;
        case 2: 
            criarPedido();
            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 0:
            console.log("Saindo...");
            break;
        default:
            console.log("Opção inválida!");   
    }
} while(opcao !== 0);

function mostrarCardapio() {
    return console.log(cardapio);
}

function buscarProduto(codigo) {
    return cardapio.find(function(item) {
        return item.codigo === codigo;
    });
}

function criarPedido() {
    let nome = prompt("Seu nome: ");

    let pedido = {
        numero: pedidos.length + 1,
        nome: nome,
        itens: []
    }

    while(true) {
        let codigo = Number(prompt("Código do item: "));
        let quantidade = Number(prompt("Quantidade: "));
        let produto = buscarProduto(codigo);

        pedido.itens.push({
            codigoItem: codigo,
            quantidade: quantidade
        })

        let escolha = prompt("Deseja adicionar mais um item (S/N): ");

        if (escolha === "N") {
            break;
        }
    }

    pedidos.push(pedido);
    console.log("Pedido criado com sucesso!");
    console.log(pedido);

}