const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML = ' ';
texto.innerHTML += `<p> Seu número somado com 2 = ${numero +2}. </p>`;
texto.innerHTML += `<p> Seu número subtraído de 2 = ${numero -2}. </p>`;
texto.innerHTML += `<p> A raiz quadrada deste número = ${((numero ** 0.5).toFixed(2))}. </p>`;
texto.innerHTML += `<p> O número ${numero}, é inteiro? ${Number.isInteger(numero)}. </p>`;
texto.innerHTML += `<p> O número ${numero}, não é um número (NaN)? ${Number.isNaN(numero)}. </p>`;
texto.innerHTML += `<p> Arredondado para baixo: ${Math.floor(numero)}. </p>`;
texto.innerHTML += `<p> Arredondado para cima: ${Math.ceil(numero)}. </p>`;
texto.innerHTML += `<p> ${numero} com duas casas decimais: ${numero.toFixed(2)}. </p>`;