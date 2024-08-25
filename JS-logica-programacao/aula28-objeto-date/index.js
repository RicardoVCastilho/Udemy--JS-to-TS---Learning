// // função new Date() = Toda função que começar com new é uma função do tipo construtora
const tresHoras = 60 * 60 * 3 * 1000; //(esta é a expressão que define 3h em milisegundos, pois no js define-se em milisegundos. Ou seja 60 * 60 * 1000 / para sair do mili * 3 para 3 horas.) Retorno: 
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + tresHoras + umDia); // marco zero/ hora zero: 1/1/1970. Retorno: Wed Dec 31 1969 21:00:00 GMT-0300 (Horário Padrão de Brasília), por causa do fuso-horário

console.log(data.toString()); // retorno: Sat Aug 24 2024 21:25:02 GMT-0300 (Horário Padrão de Brasília)

// é necessário pelo menos 2 parâmetros 
// mês no js começa com o número 0. 0 = Janeiro
const data2 = new Date(2024, 3, 20, 15, 14, 27, 500); // Ano, mês, dia, hora, minutos, segundo, milésimo
console.log(data2.toString());

const dataComString = new Date('2024-08-24 22:13:53'); // retorno: Sat Aug 24 2024 22:13:53 GMT-0300 (Horário Padrão de Brasília)
console.log(dataComString.toString());
console.log('Dia:', dataComString.getDate());
console.log('Mês:', dataComString.getMonth() + 1); // mês começa do 0
console.log('Ano:', dataComString.getFullYear());
console.log('Horas:', dataComString.getHours());
console.log('Minutos:', dataComString.getMinutes());
console.log('Segundos:', dataComString.getSeconds());
console.log('Milésimos de segundos:', dataComString.getMilliseconds());
console.log('Dia da semana:', dataComString.getDay()); // dia da semana: 0 = domingo e 6 é sábado
console.log(Date.now());

// outra forma de consultar datas: com miléssimos de segundos
const novaData = new Date(1724549077021);
console.log(novaData);

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
    const dia = zeroAEsquerda(novaData.getDate());
    const mes = zeroAEsquerda(novaData.getMonth() + 1);
    const ano = zeroAEsquerda(novaData.getFullYear());
    const horas = zeroAEsquerda(novaData.getHours());
    const min = zeroAEsquerda(novaData.getMinutes());
    const seg = zeroAEsquerda(novaData.getSeconds());

    return `${dia}/${mes}/${ano} ${horas}:${min}:${seg}`;
}

const dataNova = new Date();
const dataBrasil = formataData(dataNova);
console.log(dataBrasil); 
