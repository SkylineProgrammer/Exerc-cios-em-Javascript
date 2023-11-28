let numeroAnterior , numeroAtual , proximoNumero, numeroLido;

numeroLido = parseInt (prompt("Insira o número."))

numeroAtual = 1

proximoNumero = 0

console.log("Segue a sequencia de Fibonnaci até o número lido: ")

console.log (numeroAtual)

for(numeroAnterior = 0; proximoNumero < numeroLido;){
  proximoNumero = numeroAnterior + numeroAtual;
  numeroAnterior = numeroAtual;
  numeroAtual = proximoNumero;
  console.log(proximoNumero);
}