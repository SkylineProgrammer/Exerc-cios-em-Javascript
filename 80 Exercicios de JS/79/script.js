let numeroInteiroLido, antecessorNumeroLido, fatorialNumeroLido;

numeroInteiroLido = parseInt(prompt("Insira o número:"));
fatorialNumeroLido = numeroInteiroLido;

for(antecessorNumeroLido = numeroInteiroLido;antecessorNumeroLido!=1;antecessorNumeroLido--) {
  fatorialNumeroLido = fatorialNumeroLido * antecessorNumeroLido;
}

alert(
  "O fatorial do número " +
    numeroInteiroLido +
    " é igual a: " +
    fatorialNumeroLido
);