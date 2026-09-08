const formulario = document.getElementById('meuFormulario')

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const dados = new FormData(formulario);

    const peso = dados.get('peso');
    const objetivo = dados.get('objetivo');
    const nivel_atividade = dados.get('nivel_atividade');
});

const multiplicador = peso;

const cenarios = [
    { nome: "nivel baixo", valor: 1.0 },
    { nome: "nivel medio", valor: 1.5 },
    { nome: "nivel alto", valor: 2.0 }
];

cenarios.forEach(cenario => {
    const resultado = multiplicador * nivel.valor;
});
    
 