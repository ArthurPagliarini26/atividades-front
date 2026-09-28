

function criarMatriz(linhas, colunas) {
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
         for (let j = 0; j < colunas; j++) {
                matriz[i][j] = Math.floor(Math.random() * 10);
        }
    }
    return matriz;
}

console.log(criarMatriz(4, 4));
