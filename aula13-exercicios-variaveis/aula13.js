//Proposta: Tranformar os valores das variáveis misturando-as entre si
let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(varA, varB, varC);

// Minha solução:
let contraVarA = varB;
let contraVarB = varC;
let contraVarC = varA;

console.log(contraVarA, contraVarB, contraVarC);

// Solução proposta no vídeo:
const varAtemp = varA;
varA = varB;
varB = varC;
varC = varAtemp;

console.log(varA, varB, varC);

