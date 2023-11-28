let salario = parseFloat(prompt("Digite o salário do funcionário:"));

if (isNaN(salario) || salario < 0) {
    alert("Por favor, insira um valor de salário válido.");
} else {
    let bonus;

    // Calcula o bônus com base no salário
    if (salario > 2000) {
        bonus = salario * 0.10; // 10% de bônus
    } else {
        bonus = salario * 0.05; // 5% de bônus
    }

    alert("O valor do bônus é: R$" + bonus.toFixed(2));
}
