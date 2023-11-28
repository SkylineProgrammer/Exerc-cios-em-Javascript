// Define um objeto que mapeia os códigos de produtos aos seus preços
let precosProdutos = {
    1: 10.00,   //  produto com código 1
    2: 20.00,   //  produto com código 2
    3: 30.00,   //  produto com código 3

};

// Solicita ao usuário o código do produto e a quantidade
let codigoProduto = parseInt(prompt("Digite o código do produto:"));
let quantidadeComprada = parseInt(prompt("Digite a quantidade comprada:"));

if (isNaN(codigoProduto) || !precosProdutos[codigoProduto]) {
    alert("Código de produto inválido.");
} else {
    // Calcula o valor total a ser pago
    let precoUnitario = precosProdutos[codigoProduto];
    let valorTotal = precoUnitario * quantidadeComprada;

    // Exibe o valor total a ser pago
    alert("Valor total a ser pago: R$" + valorTotal.toFixed(2));
}
