let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
let numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, insira números inteiros válidos.");
} else {
    // Calcula a média aritmética dos três números
    let media = (numero1 + numero2 + numero3) / 3;

    // Verifica se a média é maior ou igual a 7 e exibe a mensagem apropriada
    if (media >= 7) {
        alert("Aprovado");
    } else {
        alert("Reprovado");
    }
}
