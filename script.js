const formulario = document.getElementById('meuFormulario')

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const dados = new FormData(formulario);

    const peso = dados.get('peso');
    const objetivo = dados.get('objetivo');
    const nivel_atividade = dados.get('nivel_atividade');
});

