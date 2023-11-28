let numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número é válido
if (isNaN(numero)) {
    alert("Por favor, insira um número inteiro válido.");
} else {
    // Exibe a tabuada de multiplicação até o décimo valor
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        alert(numero + " x " + i + " = " + resultado);
    }
}
