let contadora,multiplicacao,numeroLido;

numeroLido = parseInt(prompt('Insira o número para saber a tabuada:'))

for (contadora=1;contadora<=10;contadora++){
  multiplicacao = numeroLido * contadora;
  console.log(numeroLido + ' x ' + contadora + ' = ' + multiplicacao)
}


