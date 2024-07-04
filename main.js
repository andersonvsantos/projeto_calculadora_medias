const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji festejando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima:'));


let linhas = '';

function adicionarLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(inputNotaAtividade.value);

        let linha = '<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
        linha += '</tr>'

        linhas += linha;
    }
    
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for(let i =0; i < notas.length; i++) {
        somaDasNotas += parseInt(notas[i]);
    }

    return somaDasNotas / atividades.length;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('mediaFinalValor').innerHTML = mediaFinal;
    document.getElementById('mediaFinalResultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizaTabela();
    atualizaMediaFinal();
});