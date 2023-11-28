let multiplicacao, numeroInserido, contadora;

contadora = 1;

numeroInserido = parseInt(prompt("Insira o número para formar a tabuada: "));

do{
  multiplicacao = numeroInserido * contadora
  console.log(numeroInserido + " x " + contadora + " = " + multiplicacao)
  contadora++
} while (contadora<=10)