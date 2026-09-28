let array = [1,2,3,4,5,6,7,8,9,10];

console.log(array.join(","));

console.log(array.reverse());

console.log(array.slice(0, 2));

console.log(array.sort());

let pares = array.filter(x => {
    return x % 2 == 0;
})

console.log(pares);

let quadrados = array.map(x => {
    return x*x;
})

console.log(quadrados);

let soma = array.reduce((soma, x) => soma + x, 0);

console.log(soma);

array.forEach(x => {
    console.log(x);
});
