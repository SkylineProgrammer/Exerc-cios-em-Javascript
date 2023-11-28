let numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero)) {
    let numeroRestante = Math.abs(numero);

    while (numeroRestante > 0) {
        let digito = numeroRestante % 10;
        console.log(digito);
        numeroRestante = Math.floor(numeroRestante / 10);
    }
} else {
    alert("Por favor, insira um número inteiro válido.");
}
