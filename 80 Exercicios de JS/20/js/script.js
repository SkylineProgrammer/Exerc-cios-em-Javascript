// Solicita ao usuário um número inteiro
let numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é válido
if (isNaN(numero)) {
    alert("Por favor, insira um número inteiro válido.");
} else {
    // Verifica se o número é par ou ímpar
    if (numero % 2 === 0) {
        alert("O número é par.");
    } else {
        alert("O número é ímpar.");
    }
}
