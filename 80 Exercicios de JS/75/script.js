let numeroAnterior, numeroAtual, proximoNumero, contadora;

numeroAnterior = 0;

numeroAtual = 1;

console.log("Segue os primeiros 20 números da sequencia de Fibonnaci: ");

console.log(numeroAtual);
for (contadora = 1; contadora <= 19; contadora++) {
  proximoNumero = numeroAnterior + numeroAtual;

  numeroAnterior = numeroAtual;

  numeroAtual = proximoNumero;

  console.log(proximoNumero);
}
