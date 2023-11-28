let peso = parseFloat(prompt("Digite o seu peso em quilogramas:"));
let altura = parseFloat(prompt("Digite a sua altura em metros:"));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
} else {
    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Exibe o IMC
    alert("Seu Índice de Massa Corporal (IMC) é: " + imc.toFixed(2));
}
