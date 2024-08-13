let num1 = 9.54578;
let num2 = Math.floor(num1); // arredonda para baixo
console.log(num2);

let num3 = 9.54578;
let num4 = Math.ceil(num3); // arredonda para cima
console.log(num4);

let num5 = 9.49;
let num6 = Math.round(num5); // arredonda para o mais próximo
console.log(num6);

console.log(Math.max(1, 2, 3, 4, -20, 1350)); // retorna o maior número da sequência

console.log(Math.min(1, 2, 3, 4, -20, 1350)); // retorna o menor número da sequência

const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Math.random   = gera um número aleatório, mas a expressão arredondou e definiu um intervalo entre 5-10
console.log(aleatorio);

console.log((Math.PI).toFixed(2)); // valor de Pi com até duas casas decimais

console.log(Math.pow(2,10)); // Potenciação
