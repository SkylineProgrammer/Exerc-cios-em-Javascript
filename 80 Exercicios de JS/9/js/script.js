// Solicita ao usuário o valor do depósito mensal e a taxa de juros mensal
let depositoMensal = parseFloat(prompt("Digite o valor do depósito mensal:"));
let taxaDeJurosMensal = parseFloat(prompt("Digite a taxa de juros mensal (em decimal):"));

// Inicializa o montante com zero
let montante = 0;

// Calcula o montante após 12 meses
for (let i = 0; i < 12; i++) {
    montante = (montante + depositoMensal) * (1 + taxaDeJurosMensal);
}

// Exibe o montante após 12 meses
alert("O montante após 12 meses é: " + montante.toFixed(2));
