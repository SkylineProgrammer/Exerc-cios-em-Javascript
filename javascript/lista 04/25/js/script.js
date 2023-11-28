const salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));
const aumento = 0.1; // 10% de aumento
const novoSalario = salarioAtual * (1 + aumento);
console.log(`Novo salário com 10% de aumento: R$${novoSalario.toFixed(2)}`);
