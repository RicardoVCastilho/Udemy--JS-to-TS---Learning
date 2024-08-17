// criando objetos em JS
const pessoa0 = {
    nome: 'Lucio',
    sobrenome: 'Miranda',
    idade: 25
};

console.log(pessoa0.nome);
console.log(pessoa0.sobrenome);

// Função "Factory" = Cria objetos/ fábrica de objetos
function criaPessoa (nome, sobrenome, idade) {
    return {
        nome, sobrenome, idade
    };
}

const pessoa2 = criaPessoa('Ricardo', 'Castilho', 21);
const pessoa3 = criaPessoa('Luana', 'Alves', 20);
const pessoa4 = criaPessoa('Daniel', 'Castilho', 15);
const pessoa5 = criaPessoa('Pedro', 'Henrique', 13);

console.log(pessoa2.nome, pessoa2.sobrenome, pessoa3.idade, pessoa4);

//Criando objetos em uma constante
const pessoa1 = {
    nome: 'Pablo',
    sobrenome: 'Juvenal',
    idade: 68,

//Criando uma função dentro de um objeto para falar "Olá, mundo!"
    fala() {
        console.log(`Minha idade atual é: ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

//chamando os métodos (funções) criados dentro do objeto pessoa1
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.incrementaIdade();
pessoa1.fala();

pessoa1.incrementaIdade();
pessoa1.fala();
