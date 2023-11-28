let numero = parseFloat(prompt("Digite um número:"));
// Verifica se o número é positivo, negativo ou zero
if (isNaN(numero)) {
    alert("Por favor, insira um número válido.");
} else if (numero > 0) {
    alert("O número é positivo.");
} else if (numero < 0) {
    alert("O número é negativo.");
} else {
    alert("O número é zero.");
}
