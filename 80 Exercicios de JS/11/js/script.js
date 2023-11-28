let numero1 = parseFloat(prompt("Digite o primeiro número real:"));
let numero2 = parseFloat(prompt("Digite o segundo número real:"));
let numero3 = parseFloat(prompt("Digite o terceiro número real:"));

if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
    alert("Por favor, insira números reais válidos.");
} else {
    // Calcula a média aritmética
    let media = (numero1 + numero2 + numero3) / 3;

    // Exibe a média
    alert("A média dos números é: " + media.toFixed(2));
}
