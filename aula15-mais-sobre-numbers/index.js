let num1 = 1500; // number
let num2 = 2.5; // number

console.log(num1.toString() + num2); // convertendo number para string só no log

num1 = num1.toString(); // convertendo number para string definitivamente
console.log(typeof num1)

console.log(num1.toString(2)); // Representação binária do num1 através do método toString. Resultado: 10111011100

let num3 = 10.578968899887;
console.log(num3.toFixed(2)); // Arredonda para 2 casas decimais após a vírgula

let num4 = 10;
console.log(Number.isInteger(num4)); // retorna se o número é inteiro com true or false

let temp = num1 * '5';
console.log(Number.isNaN(temp)); // retorna se o resultado é um número ou não, com true ou false

let num5 = 0.7;
let num6 = 0.1;

console.log(num5 + num6); // 0.79999...

num5 += num6; // 0.79999...
num5 += num6; // 0.89999...
num5 += num6; // 0.99999... (1.0)

// //primeira forma de solucionar o problema de casas decimais muito grandes:
num5 = parseFloat(num5.toFixed(2)); // convertendo numeração para decimal e depois fixando em 2 casas após a vírgula = inteiro
console.log(num5);
console.log(Number.isInteger(num5));

//segunda forma: Só com contas, multiplica por 100 ambos os números, soma e depois divide por 100
num5 = ((num5 * 100) + (num6*100))/100;
console.log(num5);


