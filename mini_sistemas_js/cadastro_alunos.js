const prompt = require("prompt-sync")();

let opcao;
let listaAlunos = [];

do {
    console.log("\n=== MENU ===");
    console.log("1 - Cadastrar aluno");
    console.log("2 - Listar alunos");
    console.log("3 - Buscar aluno pelo nome");
    console.log("4 - Mostrar alunos aprovados");
    console.log("5 - Mostrar média geral da turma");
    console.log("0 - Sair");
    opcao = Number(prompt("Escolha uma opção: "));

    switch (opcao) {
        case 1:
            cadastrarAluno();
            break;
        case 2:
            listarAlunos();
            break;
        case 3:
            nome = prompt("Nome: ");
            buscarPorNome(nome);
            break;
         case 4:
            console.log(mostrarAprovados());
            break;
        case 5:
            console.log(mostrarMediaGeral());
            break;
        case 0:
            console.log("Programa encerrado.");
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);

function cadastrarAluno() {
    let nome = prompt("Nome: ");
    let idade = Number(prompt("Idade: "));
    let curso = prompt("Curso: ");
    let nota1 = Number(prompt("Nota 1: "));
    let nota2 = Number(prompt("Nota 2: "));

    listaAlunos.push({
        aluno: {
            nome: nome, 
            idade: idade,
            curso: curso,
            nota1: nota1,
            nota2: nota2 
        }
    });

    console.log("Aluno cadastrado com sucesso!");
}

function listarAlunos() {
    for(let chave in listaAlunos) {
        console.log("Aluno " + (chave + 1) + ":");
        console.log(listaAlunos[chave].aluno);
    }
}

function buscarPorNome(nome) {
     listaAlunos.forEach(function(item) {
        if (item.aluno.nome == nome) {
            console.log(item.aluno);   
        } 

        console.log("Aluno não encontrado."); 
     })
}

function calcularMedia(alunoNome) {
    let media = 0;

    listaAlunos.forEach(function(item) {
        if (item.aluno.nome === alunoNome) {
            media = (item.aluno.nota1 + item.aluno.nota2) / 2;
        }
    })
    return media;
}

function mostrarAprovados() {
    let aprovados = [];

    listaAlunos.forEach(function(item) {
        if (calcularMedia(item.aluno.nome) >= 7) {
            aprovados.push(item.aluno);
        }
    })
    return aprovados;
}

function mostrarMediaGeral() {
    let soma = 0;
    listaAlunos.forEach(function(item) {
        soma += calcularMedia(item.aluno.nome);
    })

    return soma / listaAlunos.length;
}