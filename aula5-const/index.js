// string = text | Number= número
const primeiroNumero = 5;
 const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);

const resultadoDouble = resultado*2;
console.log(resultadoDouble);

/*a diferença de uma const para uma let é evidenciada aqui: Com o let, eu consegui modi-
ficar o valor da operação na linha 11, "perdendo" o valor original. Com as consts acima 
nada foi perdido*/

let resultadoTriple = resultado*3;
resultadoTriple = resultadoTriple + 5;
console.log(resultadoTriple);

console.log(typeof(primeiroNumero));