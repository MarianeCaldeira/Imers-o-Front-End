function questao1() {
    console.log('Ola Mundo!');
}
questao1();

function questao2(nome) {
    console.log('Olá, ' + nome);
}
questao2("Mariane");

function questao3(n) {
    var dobro = n * 2;
    console.log('O drobro de ' + n + ' é ' + dobro);
}
questao3(2);

function questao4(n1, n2, n3) {
    return (n1 + n2 + n3)/3;
}
let media = questao4(2, 2, 2);
console.log(media);

function questao5(n1, n2) {
    return n1 > n2 ? n1 : n2;
}
let maior = questao5(3, 5);
console.log(maior);

function questao6(n) {
    return n * n;
}
let multi = questao6(3);
console.log(multi);