/* 
Ricardo Vitor Castilho tem 21 anos, pesa 96 kg
tem 1.75 de altura e seu IMC é de "valor IMC"
Ricardo Vitor nasceu em 2002
*/

const nome = 'Ricardo Vitor';
const sobreNome = 'Castilho';
const idade = 22;
const alturaEmM = 1.75;
const peso = 96;

let imc;
imc = peso / (alturaEmM*alturaEmM);

let anoNascimento;
anoNascimento = 2024 - idade;

// 3 principais formas de exibir resultados nos logs:

//1- Utilizando o símbolo de + como concatenação (unindo strings e retorno de constantes)
console.log(nome + ' ' + sobreNome + ', tem ' + idade + ' anos de idade e pesa ' + peso + ' kg');
//2- Separando por vígulas
console.log('Tem', alturaEmM, 'm de altura.');
/* 3- Utilizando o símbolo de ${} dentro da string completa acraciada,
 interpretando as contantes como se fossem funções*/
console.log(`Seu IMC é ${imc}, e ele nasceu em ${anoNascimento}`);