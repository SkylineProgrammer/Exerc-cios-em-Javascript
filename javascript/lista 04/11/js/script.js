const nomeProduto = prompt("Digite o nome do produto:");
const precoProduto = parseFloat(prompt("Digite o preço do produto:"));
const desconto = 0.1; 
const precoComDesconto = precoProduto - (precoProduto * desconto);
alert(`Produto: ${nomeProduto}\nPreço com 10% de desconto: R$${precoComDesconto.toFixed(2)}`);
