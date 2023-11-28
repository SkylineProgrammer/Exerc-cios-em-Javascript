let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));

if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, insira números inteiros válidos.");
} else {
    // Verifica se o primeiro número é múltiplo do segundo
    if (numero1 % numero2 === 0) {
        alert(numero1 + " é múltiplo de " + numero2);
    } else {
        alert(numero1 + " não é múltiplo de " + numero2);
    }
}
