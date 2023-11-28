let salarioMinimo = parseFloat(prompt("Digite o valor do salário-mínimo:"));
let salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário:"));

if (isNaN(salarioMinimo) || isNaN(salarioFuncionario) || salarioMinimo <= 0 || salarioFuncionario <= 0) {
    alert("Por favor, insira valores válidos para o salário-mínimo e o salário do funcionário.");
} else {
    // Calcula quantos salários-mínimos o funcionário recebe
    let quantosSalariosMinimos = salarioFuncionario / salarioMinimo;

    // Exibe a quantidade de salários-mínimos
    alert("O funcionário recebe " + quantosSalariosMinimos.toFixed(2) + " salário(s)-mínimo(s).");
}
