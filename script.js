const formulario = document.getElementById('meuFormulario')

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const dados = new FormData(formulario);

    const peso = Number(dados.get('peso'));
    const objetivo = dados.get('objetivo');
    const nivel_atividade = String(dados.get('nivel_atividade')).toLowerCase();

    const multiplicador = peso;

    const fatores = {
        baixo: 1.2,
        medio: 1.5,
        alto: 2.0, 
    };

const opcaoSelecionada = nivel_atividade;

const resultado = multiplicador * fatores[opcaoSelecionada];


const campoResultado = document.getElementById('resultadoTexto');
campoResultado.textContent = `Seu consumo medio de proteina é de: ${resultado}`;
formulario.reset();
});


    
 