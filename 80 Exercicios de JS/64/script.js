let numeroInteiroLido, antecessorNumeroLido, fatorialNumeroLido;

numeroInteiroLido = parseInt(prompt("Insira o número:"));
antecessorNumeroLido = numeroInteiroLido;
fatorialNumeroLido = numeroInteiroLido;
do{
  antecessorNumeroLido--;
  fatorialNumeroLido = fatorialNumeroLido * antecessorNumeroLido;
}while (antecessorNumeroLido !=1) 
alert(
  "O fatorial do número " +
    numeroInteiroLido +
    " é igual a: " +
    fatorialNumeroLido
);
