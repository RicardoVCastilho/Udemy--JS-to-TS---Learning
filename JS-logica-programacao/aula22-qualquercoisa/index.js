// Operadores lógicos

// AND -> && -> E
const expressaoAnd = true && true && false && true;
console.log(expressaoAnd);

// OR -> || -> OU
const expressaoOr = true || false;
console.log(expressaoOr);

// Exemplo prático:
const usuario = 'Luana'; // forms de cadastro
const senha = '4002'; // forms de cadastro
 //                      true                 false = tudo false
const vaiLogar = usuario === 'Luana' && senha === '4003';
console.log(vaiLogar);

// NOT -> ! -> NÃO
console.log(!true); // negando o true = false