// Exercícios com Variáveis let
//1
let valor = 2;
valor = 3;
console.log(valor);

//2
let num1 = 2;
let num2 = 7;
let somavalor = num1 + num2;
console.log(somavalor);

//3
let numero = 3;
numero = 4;
console.log(numero);

//4
let texto = 'Olá, mundo!';
console.log('Ricardo diz: ' + texto);

//5
let teste = 5;
console.log(teste + "5"); // Concatenando dado do tipo number com string;

// Exercícios variáveis com const
1
const valor2 = 10;
valor2 = 11;
console.log(valor2); // Assignment to constant variable

//2
const pessoa = {
    nome: 'Ricardo',
    sobrenome: 'Vitor',
    idade: 21
};

pessoa.nome = 'Luana';
console.log(pessoa);

//3
const pessoas = ['Luana', 'Ricardo', 'Daniel', 'Pedro'];
pessoas.push('Fernanda');
console.log(pessoas);

pessoas.shift();
console.log(pessoas);

//4
const word1 = 'Abluble';
const word2 = 'Daniel is ';

console.log(word2 + word1);

//5
const vouReatribuir = 'Olá, mundo!';
vouReatribuir = 'Luana';
console.log(vouReatribuir); // assignment to constant variable

// Exercicios com operadores aritméticos

//1
const num3 = 15;
const num4 = 12;
const soma = num3 + num4;
const subtra = num3 - num4;
const multi = num3 * num4;
const div = num3/num4;

console.log(soma, subtra, multi, div);

//2
let contador = 16;
console.log(++contador);
console.log(++contador);
console.log(++contador);
console.log(contador);

//3
const valor3 = 18;
const soma02 = valor3 + 2;
const subtrai02 = valor3 - 2;
const multi02 = valor3 * 2;
const div02 = valor3 / 2;

console.log(soma02, subtrai02, multi02, div02);

//4
const num5 = 10;
const num6 = 3;

const resto = num5 % num6;
console.log(resto);

//5
const num7 = 10;
const num8 = 5;

const precedResult = num7 * num8 + num7 - num8 / num7; // * e / primeiro, depois + e -
console.log(precedResult);

// Exercicios de atribuição e incremento (1 - 5)
let contador2 = 20;
console.log(++contador2); // 21
console.log(--contador2); // 21-1 =  20

contador2 += 3;
console.log(contador2); //23

contador2 -= 4;
console.log(contador2); //23-4 = 19

contador2 *= 3;
console.log(contador2);

// Exercícios com strings (1 - 4)
const texto3 = 'Ricardo e ';
const texto4 = 'Luana';

console.log(texto3 + texto4); // Ricardo e Luana
console.log(texto3.toUpperCase());
console.log(texto4.toLowerCase());
console.log(texto3.slice(1, 4)); // ica
console.log((texto3 + texto4).length);
console.log(texto3.replace('a', '*')); // Ric*rdo
console.log(`Ricardo ama ${texto4}`);

//5 = Dividir uma string
let frase = 'JS é top';
let palavras = frase.split (' ');
console.log(palavras);

// Exercícios com objetos (1 - 3)
const cidadao = {
    nome: 'Luana',
    idade: 21,
    cidade: 'Recife'
};

console.log(cidadao.nome);

cidadao.profissao = 'Vendedora';
cidadao.estadoCivil = 'Noiva';
console.log(cidadao);

delete cidadao.estadoCivil;
console.log(cidadao);

//4
const funcionarios = {
    nome: 'Daniel',
    idade: 19,
    cargo: 'Programador',
    descricao: function() {
        return `${this.nome} é ${this.cargo} e tem ${this.idade} anos de idade.`
    }
};

console.log(funcionarios.descricao());

//5
funcionarios.nome = 'Ricardo';
console.log(funcionarios);

// Exercícios com Function
//1
function valores() {
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
}

console.log(valores()); // 30

//2
function saudacao(nome) {
    return `${nome} diz: Olá, mundo!`
}

const variavel = saudacao('Ricardo');
console.log(variavel);

//3
const somanums = function(a, b) {
    return a + b;
};

console.log(somanums(4 , 3)); // 7

//4
function multinums (a, b = 2) { // parâmetro que define a necessidade de dois argumentos: a, b onde quando não tiver o b, sempre será 2
    return a * b;
};

console.log(multinums(2, 2)); // usando os dois parêmetros: Resultado é 4
console.log(multinums(7)); // usando apenas a, sempre vai multiplicar pelo valor de b. Resultado: 14

//5
function exibirMensagem() {
    return `Ricardo diz: ${mensagem()}`;

    function mensagem() {
        return 'Olá mundo!'
    }
};

console.log(exibirMensagem());

// Exercícios com arrays (1 - 5)
const tabelaNumeros = [1, 2, 3, 4, 5];

console.log(tabelaNumeros[0]);
console.log(tabelaNumeros[4]);

tabelaNumeros.push(10); // adiciona 10 no final
console.log(tabelaNumeros);

tabelaNumeros.pop(); // remove 10 do final
console.log(tabelaNumeros);

tabelaNumeros.shift(); // remove 1 do início
console.log(tabelaNumeros);

tabelaNumeros.unshift(12);
console.log(tabelaNumeros); // adiciona 12 no início

console.log(tabelaNumeros.indexOf(5)); // retorna a posição do elemento 5 no array
console.log(tabelaNumeros.length); // retorna o tamanho do array
console.log(tabelaNumeros.includes(10)); // retorna com true of false se no array se encontra este elemento

tabelaNumeros[2] = 'Luana'; // altera elemento detro do array (mudou 3 para Luana)
console.log(tabelaNumeros);

const tabelaNumeros2 = [17, 18, 19]; // criando um segundo array
console.log(tabelaNumeros.concat(tabelaNumeros2)); // concatenando com o primeiro
