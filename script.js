const formulario = document.getElementById('meuFormulario')

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const dados = new FormData(formulario);

    const peso = dados.get('peso');
    const objetivo = dados.get('objetivo');
    const nivel_atividade = dados.get('nivel_atividade');
});

//Nivel de atividade fisica
const baixo = 1.0;
const medio = 1.5;
const alto = 2.0;

const result1 = peso * baixo
const result2 = peso * medio
const result3 = peso * alto