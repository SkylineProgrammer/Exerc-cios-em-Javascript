// Solicita ao usuário três números inteiros
let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
let numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

// Verifica se os valores são válidos
if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, insira números inteiros válidos.");
} else {
    // Ordena os números em ordem crescente
    let numerosOrdenados = [numero1, numero2, numero3];
    numerosOrdenados.sort((a, b) => a - b);

    // Exibe os números em ordem crescente
    alert("Números em ordem crescente: " + numerosOrdenados.join(", "));
}
