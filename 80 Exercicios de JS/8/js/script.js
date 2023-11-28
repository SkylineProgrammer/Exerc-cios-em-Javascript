// Lê os números inteiros do usuário
let numero1 = parseInt(prompt("Digite o primeiro número:"));
let numero2 = parseInt(prompt("Digite o segundo número:"));

// Troca os valores das variáveis
let temp = numero1;
numero1 = numero2;
numero2 = temp;

// Exibe os números trocados
alert("Primeiro número: " + numero1);
alert("Segundo número: " + numero2);
