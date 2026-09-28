let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

function juntarArrays(array1, array2) {
    let juncao = array1.concat(array2);
    return juncao;
}

console.log("Junção: " + juntarArrays(array1, array2));
