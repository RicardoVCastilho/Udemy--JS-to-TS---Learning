const num1 = 2;
const num2 = 10;

console.log(num1 ** num2); // resultado (2 elevado a 10) = 1024

const num3 = 10;
const num4 = 3;

console.log(num3 % num4); // resultado (qual o resto de 10/3) = 1

const num5 = 5;
const num6 = 2;
const num7 = 10;

// Neste cenário a multiplicação ocorre primeiro. Resultado: 25
console.log(num5 + num6 * num7); 

// Neste caso, o processo foi corretamente, pois isolei a soma no parênteses. Resultado: 70
console.log((num5 + num6) * num7);

let contador = 1;
contador++;
console.log(contador); // resultado esperado = 2

contador = 3;
console.log(contador++); // resultado esperado = 3 ainda, pois acrescentei após o console
console.log(contador); // aqui exibe o resultado após o acréscimo. Resultado esperado = 4
console.log(++contador); // aqui exibe o acréscimo primeiro e depois o resultado. Resultado = 5

contador = 10;
console.log(--contador); // resultado esperado = 9

const num8 = 10;
const num9 = parseInt('5'); // converte string em número inteiro
console.log(num8 + num9); // resultado esperado = 15, resultado da soma

const num10 = 10;
const num11 = parseFloat('5.3'); // converte em "número flutuante"
console.log(num10 + num11); // resultado esperado = 15.3

const num12 = 10;
const num13 = Number('5.4');
console.log(num12 + num13); // resultado esperado = 15.4
