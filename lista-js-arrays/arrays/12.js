let idades = [18, 18, 18, 18, 34];

let verdade = idades.every(x => {
    return x >= 18;
})

if (verdade) {
    console.log("Todos são maiores de 18!");
} else {
    console.log("Muito novos.");
}