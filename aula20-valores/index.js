// Valores com dados primitivos (string)
let nome = 'Ricardo';
nome = 'Vitor';
console.log(nome[0]);

// Valores com dados por referência (array)
let a = [1, 2, 3];
let b = a;
let c = b;
console.log(a, b);

a.push(4);
console.log(a, b);

b.pop();
console.log(a, b);

a.push('Ricardo');
console.log(c);

// Alterando dentro do array
const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Vitor'
};

const altera = {...pessoa};

pessoa.nome = 'Luana';
console.log(altera);