let quantidadeMacas = parseInt(prompt("Digite o número de maçãs compradas:"));

if (isNaN(quantidadeMacas) || quantidadeMacas < 0) {
    alert("Por favor, insira uma quantidade válida de maçãs.");
} else {
    // Calcula o valor total a ser pago
    let precoPorMaca = (quantidadeMacas < 12) ? 0.50 : 0.40;
    let valorTotal = quantidadeMacas * precoPorMaca;

    // Exibe o valor total a ser pago
    alert("Valor total a ser pago: R$" + valorTotal.toFixed(2));
}
