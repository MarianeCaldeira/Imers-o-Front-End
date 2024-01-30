let titulo = document.querySelector('h1')
titulo.innerHTML = 'Challenge Time'

function verificarConsole() {
    console.log('O botão foi clicado!');
}

function verificarAlert() {
    alert('Eu amo JS!')
}

function verificarPrompt() {
    var cidade = prompt('Informe o nome de uma cidade: ');
    alert('Estive em ' + cidade + ' e lembrei de você.');
}

function verificarSoma(){
    var n1 = parseInt(prompt('Informe o primeiro número: '));
    var n2 = parseInt(prompt('Informe o segundo número: '));
    var soma = n1 + n2;
    alert(n1 + ' + ' + n2 + ' = ' + soma);
}