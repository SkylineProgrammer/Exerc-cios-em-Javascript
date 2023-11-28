let contadora,numeroLido;

numeroLido = parseInt(prompt('Insira o número para saber seus divisores:'))

for (contadora=1;contadora<=numeroLido;contadora++){
  if(numeroLido%contadora==0){
    console.log (contadora + ' é um divisor.')
  }
}


