let numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero) && numero >= 0) {
    let fatorial = 1;
    let contador = 1;

    while (contador <= numero) {
        fatorial *= contador;
        contador++;
    }

    alert("O fatorial de " + numero + " é: " + fatorial);
} else {
    alert("Por favor, insira um número inteiro não negativo.");
}
