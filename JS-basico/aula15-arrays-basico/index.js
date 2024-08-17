//                 0        1       2         3
const alunos = ['Pedro', 'Tiago', 'João', 'Barquinho'];

console.log(alunos[0]); // verificando elementos específicos dos índicies
console.log(alunos[2]);

alunos[0] = 'Daniel';  // editando índicie 0 do array
alunos[2] = 'Ricardo'; // adicionando no índicie 2 do array

console.log(alunos.length); // verificando o tamanho do array


alunos[alunos.length] = 'Donatello'; // adicionando itens no final do array
alunos[alunos.length] = 'Mikey';
alunos[alunos.length] = 'Rafa';

alunos.push('Bob'); // adicionando elementos no final do array com a função.push()
alunos.push('Patrick');

delete alunos[1]; // deletando elemento do array sem alterar o índicie
alunos.shift(); // removendo o primeiro elemento do array com a função.shift() 
alunos.pop(); // removendo o último elemento do array com a função.pop() 
alunos.unshift('Luiza'); // adicionando elemento no início do array com a função função .unshift() 


