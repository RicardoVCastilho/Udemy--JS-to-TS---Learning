document.getElementById('calcular').addEventListener('click', function(e) {
    e.preventDefault();
    const numeroPeso = Number(document.getElementById('input-peso').value);
    const numeroAltura = Number(document.getElementById('input-altura').value);
    const resultadoDiv = document.getElementById('resultado');

    // Verifica se os valores de peso e altura são válidos
    if (isNaN(numeroPeso) || numeroPeso <= 0 || isNaN(numeroAltura) || numeroAltura <= 0)  {
        resultadoDiv.textContent = 'Peso ou Altura inválidos';
        return;
    } 

    // Calcula o IMC
    const imc = numeroPeso / (numeroAltura * numeroAltura);
    let resultado;

    // Define a categoria do IMC
    if (imc < 16.5) {
        resultado = 'Você está severamente abaixo do peso';
    } else if (imc >= 16.5 && imc < 18.5) {
        resultado = 'Você está abaixo do peso!'; 
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultado = 'Você está com o peso normal!';
    } else if (imc >= 25 && imc <= 29.9) {
        resultado = 'Você está com sobrepeso!';
    } else if (imc >= 30 && imc <= 34.9) {
        resultado = 'Você tem obesidade grau 1';
    } else if (imc >= 35 && imc <= 39.9) {
        resultado = 'Você tem obesidade grau 2';
    } else if (imc >= 40) {
        resultado = 'Você tem obesidade grau 3';
    } 

    // Exibe o resultado
    resultadoDiv.textContent = `Seu IMC é: ${imc.toFixed(2)}. ${resultado}`;
});