let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));

if (isNaN(salarioAtual) || salarioAtual < 0) {
    alert("Por favor, insira um valor de salário válido.");
} else {
    // Calcula o novo salário com aumento de 15%
    let aumento = salarioAtual * 0.15; // 15% em forma decimal
    let novoSalario = salarioAtual + aumento;

    // Exibe o novo salário
    alert("O novo salário com aumento de 15% é: " + novoSalario.toFixed(2));
}
