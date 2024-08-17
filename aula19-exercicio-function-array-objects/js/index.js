function meuEscopo () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const idade = form.querySelector('.idade');
        const altura = form.querySelector('.altura');
        const peso = form.querySelector('.peso');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            idade: idade.value,
            altura: altura.value,
            peso: peso.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p> Seu nome é: ${nome.value} ${sobrenome.value}.` + ` Sua idade e altura: ${idade.value}` +
        `, ${altura.value}. Seu peso: ${peso.value}</p>`
    };

    form.addEventListener('submit',recebeEventoForm);
}
meuEscopo();