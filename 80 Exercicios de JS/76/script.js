let contadora, somaDosNumeros, numeroLido;

somaDosNumeros = 0

numeroLido = parseInt(prompt('Insira o número para saber a tabuada:'))

for (contadora=1;contadora<=numeroLido;contadora++){
  if(contadora%2==0){
    somaDosNumeros = somaDosNumeros + contadora
  }
}

alert("A soma dos números pares da faixa inserida é igual a: " +somaDosNumeros)


