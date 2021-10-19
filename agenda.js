var buttonNovoEvento = document.getElementById('buttonNovoEvento');
var buttonCancelar = document.getElementById('buttonCancelar');
var formNovoEvento = document.getElementById('formNovoEvento');
var inputNomeEvento = document.getElementById('nomeEvento');
var inputDataEvento = document.getElementById('dataEvento');
var tabela = document.getElementById('tabelaEventos')

var listaEventos = [];




function atualizarTabela() {

    if (listaEventos.length === 0) {
        tabela.innerHTML = '<tr><td colspan="3">Nenhum evento</td></tr>'
        return;
    }
    tabela.innerHTML = '';
    for(var i = 0; i< listaEventos.length; i++){
        var listaDeEventos = listaEventos[i];
        var linha = document.createElement('tr')
        var celulaData = document.createElement('td')
        var celulaNome = document.createElement('td')
        var celulaAcoes = document.createElement('td')
        var botaoExcluir = document.createElement('button')
        botaoExcluir.classList.add('btn')
        botaoExcluir.classList.add('btn-danger')
        botaoExcluir.classList.add('btn-sm')
        botaoExcluir.addEventListener('click', removerEvento)
        botaoExcluir.setAttribute('data-evento',i)
        celulaNome.innerText = listaDeEventos.texto;
        celulaData.innerText = listaDeEventos.data;
        botaoExcluir.innerText = 'Delete'
        celulaAcoes.appendChild(botaoExcluir);
        linha.appendChild(celulaData);
        linha.appendChild(celulaNome);
        linha.appendChild(celulaAcoes);
        tabela.appendChild(linha);
    }


    
}

function removerEvento(event) {
    var posicao = event.target.getAttribute('data-evento');
    listaEventos.splice(posicao, 1)
    atualizarTabela();
    
}

function novoEvento() {
    var novoEvento = document.getElementById('novoEvento');
    novoEvento.classList.remove('d-none');
    buttonNovoEvento.classList.add('d-none');
}

function salvarNovoEvento(event) {
    event.preventDefault()
    var textoEvento = inputNomeEvento.value;
    var dateEvento = new Date(inputDataEvento.value);
    listaEventos.push({
        texto: textoEvento,
        data: dateEvento
    })
    /*localStorage.setItem('storage', JSON.stringify(listaEventos));
    const armazenamento = JSON.parse(localStorage.getItem('storage'))
    console.log(armazenamento)*/
    atualizarTabela();
    var novoEvento = document.getElementById('novoEvento');
    novoEvento.classList.add('d-none');
    buttonNovoEvento.classList.remove('d-none');

    

    

    
}

function cancelar(){
    var novoEvento = document.getElementById('novoEvento');
    novoEvento.classList.add('d-none');
    buttonNovoEvento.classList.remove('d-none');
}

buttonNovoEvento.addEventListener('click', novoEvento);
buttonCancelar.addEventListener('click', cancelar);
buttonSalvar = addEventListener('submit', salvarNovoEvento);
window.addEventListener('load', atualizarTabela)