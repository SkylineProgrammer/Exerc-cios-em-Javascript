let peso = parseFloat(prompt("Digite o seu peso em quilogramas:"));
let altura = parseFloat(prompt("Digite a sua altura em metros:"));

// Verifica se os valores são válidos
if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    alert("Por favor, insira valores válidos para peso e altura.");
} else {
    // Calcula o IMC
    let imc = peso / (altura * altura);

    // Classificação do IMC
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "Peso normal";
    } else if (imc < 29.9) {
        classificacao = "Sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "Obesidade Grau I";
    } else if (imc < 39.9) {
        classificacao = "Obesidade Grau II";
    } else {
        classificacao = "Obesidade Grau III";
    }

    // Exibe o IMC e a classificação
    alert("Seu Índice de Massa Corporal (IMC) é: " + imc.toFixed(2));
    alert("Classificação: " + classificacao);
}
