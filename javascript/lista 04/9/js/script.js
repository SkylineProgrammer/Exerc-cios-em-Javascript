const peso = parseFloat(prompt("Digite o seu peso (em kg):"));
const altura = parseFloat(prompt("Digite a sua altura (em metros):"));
const imc = peso / (altura * altura);
alert(`Seu Índice de Massa Corporal (IMC) é: ${imc.toFixed(2)}`);
