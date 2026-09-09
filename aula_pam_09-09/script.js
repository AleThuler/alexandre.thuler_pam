var soma = document.getElementById("soma");
var subtracao = document.getElementById("subtracao");
var multiplicacao = document.getElementById("multiplicacao");
var divisao = document.getElementById("divisao");
var exponencial = document.getElementById("exponencial");
var raiz = document.getElementById("raiz");


var primeiroValor = window.prompt("Qual vai ser o primeiro valor??");
var segundoValor = window.prompt("Qual vai ser o segundo valor??");

soma.textContent = Number(primeiroValor) + Number(segundoValor);

subtracao.textContent = primeiroValor - segundoValor;

multiplicacao.textContent = primeiroValor * segundoValor;

if (segundoValor == 0){
    divisao.textContent = "erro, não pode dividir zero"
} else {
    divisao.textContent = primeiroValor / segundoValor;
}

exponencial.textContent = primeiroValor ** segundoValor;

if (segundoValor == 0){
    raiz.textContent = `Primeiro valor: ${Math.sqrt(primeiroValor)} | Segundo valor: Erro, não temos a raiz de zero`
} else {
    raiz.textContent = `Primeiro valor: ${Math.sqrt(primeiroValor)} | Segundo valor: ${Math.sqrt(segundoValor)}`
}