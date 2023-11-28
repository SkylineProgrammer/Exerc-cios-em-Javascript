let limite = parseInt(prompt("Digite um número inteiro para a sequência de Fibonacci:"));

if (!isNaN(limite) && limite >= 0) {
    let primeiro = 0;
    let segundo = 1;
    let atual = 0;

    while (atual <= limite) {
        console.log(atual);
        atual = primeiro + segundo;
        primeiro = segundo;
        segundo = atual;
    }
} else {
    alert("Por favor, insira um número inteiro não negativo.");
}
