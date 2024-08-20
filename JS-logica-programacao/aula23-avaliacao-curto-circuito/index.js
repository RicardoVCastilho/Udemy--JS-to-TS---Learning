/* Falsy values:
0 | '' | "" | `` | null / undefined | NaN
Qualquer coisa diferente destes valores, serão avaliados em true em JS
*/

//verificação de curto-circuito com AND (&&)
console.log('Luana' && 0 && 'Ricardo'); // retorna: 0, pois o mesmo é um valor que simboliza false em JS
console.log('Luana' && true && 'Ricardo'); // retorna: Ricardo, última expressão true no cod
console.log('Luana' && true && NaN); // retorna: NaN = última espressão false do cod

// Exemplo em uma função básica
function falaOi () {
    return 'Oi';
}

const vaiExecutar = false;
const vaiExecutar2 = 'Joãozinho';

console.log(vaiExecutar && falaOi()); // false, pois vaiExecutar é false e no and precisamos de tudo verdadeiro
console.log(vaiExecutar2 && falaOi()); // executa a função normalmente

// Verificação de curto-circuito com OR (||)
console.log(0 || false || null || 'Ricardo Vitor'|| true); // retorna 'Ricardo Vitor' = primeiro valor verdadeiro

// Exemplo com uma cor selecionada pelo usuário, se não tiver cor, exibe a padrão
let corUsuario = null;
let corPadrao = corUsuario || 'preto';
console.log(corPadrao);

corUsuario = 'vermelho';
corPadrao = corUsuario || 'preto';
console.log(corPadrao);

// Pegadinha: Qual destas constantes será exibida? R: A única true= 'false' pois é uma string
const a = 0;
const b = null;
const c = 'false';
const d = false;
const e = NaN;

console.log(a || b || c || d || e); // exibe o 'false', pois a string é interpretada como verdadeiro