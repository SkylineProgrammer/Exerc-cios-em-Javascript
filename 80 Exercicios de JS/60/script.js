let numeroAnterior, numeroAtual, proximoNumero, contadora;

contadora = 1

numeroAnterior = 0;

numeroAtual = 1;

console.log("Segue os primeiros 20 números da sequencia de Fibonnaci: ");

console.log(numeroAtual);
do {
  proximoNumero = numeroAnterior + numeroAtual;

  numeroAnterior = numeroAtual;

  numeroAtual = proximoNumero;

  console.log(proximoNumero);
  
  contadora++
} while (contadora<=19);