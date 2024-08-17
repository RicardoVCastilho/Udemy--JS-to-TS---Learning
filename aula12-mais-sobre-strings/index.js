/* Podemos utilizar barras invertidas para "escapar uma palavra na string" e utilizar aspas
duplas,tanto na atribuição da string, quanto no valor em si. Observe:*/
let umaString = "Um \"texto\"";
console.log(umaString);

//               0123456789
let segString = "Dois texto";
console.log(segString[5]);
//               0123456789
let terString = "Três texto.";
console.log(terString.concat(" Olá, mundo!")); // retorno: Três texto. Olá, mundo!
console.log(terString.lastIndexOf("ê", 3)); // atributo para verificar o índicie a partir do último caractere
console.log(terString.indexOf("o")); // Retornar o indície
console.log(terString.match(/[a-z]/g)); // retornar as letras de a-z
console.log(terString.search(/x/)); // procurar posição do x
console.log(terString.replace('Três', 'Tanto faz')); // trocar um elemento do texto

let quarString = "O rato roeu a roupa do rei de roma";
console.log(quarString.replace(/r/g, '#')); // substituir todas as letras r por #
console.log(quarString.length); // retornar tamanho da string // diferente do índicie, pois começa do 1
console.log(quarString.slice(2, 6)); // "fatiar", exibe só a coordenada de acordo com o índicie (retorno: rato)
console.log(quarString.split(' ', 3)); // Divide e exibe as partes da string das coordenadas
console.log(quarString.toUpperCase()); // Transforma tudo dentro do parênteses em maiúsculo
console.log(quarString.toLowerCase()); // Transforma tudo dentro do parênteses em minúsculo





