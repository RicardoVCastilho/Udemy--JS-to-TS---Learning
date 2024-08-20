// If pode ser utilizado sozinho
// Sempre que utilizo else, preciso de um if antes
// Podem existir inúmeros else ifs na checagem
// Só pode existir um else na checagem
// Podemos utilizar condições só de if e else. Sem precisar de else ifs

const hora = 25; // definindo uma constante hora com o valor 13

// se a constante hora for menor ou igual a 0h (meia noite) e menor ou igual a 11. Execute o log de bom dia.
if (hora >= 0 && hora <= 11) {
    console.log('Bom dia!');   
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa noite!');
} else {
    console.log('Olá, este valor não é um horário!');
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa :)');
} else {
    console.log('Tô liso, não vou sair...');
}