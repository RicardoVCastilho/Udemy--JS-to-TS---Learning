// function de bom dia com nome
function saudacao (nome) {
    return `Bom dia, ${nome}!`;
}

const variavel = saudacao('Ricardo');
console.log(variavel);

// function de soma de dois números (Caso não tenha nenhum argumento para o parâmetro, resultado sempre será 2)
function soma (x = 1, y = 1) {
    const resultado = x + y;
    return resultado; 
}

console.log(soma(2, 2));
console.log(soma(3, 1));
console.log(soma(5, 10));

// function dentro de uma variável

const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// arrow function

const quadrado = n => n ** 2;

console.log(quadrado(2));
console.log(quadrado(3));
console.log(quadrado(5));


