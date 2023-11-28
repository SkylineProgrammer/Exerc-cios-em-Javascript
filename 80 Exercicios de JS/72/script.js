let contadora, somaDosDivisores, numeroLido;

somaDosDivisores = 0

numeroLido = parseInt(prompt("Insira o número para saber se ele é primo:"));

for (contadora = 1; contadora <= numeroLido; contadora++) {
  if (numeroLido % contadora == 0) {
    somaDosDivisores = somaDosDivisores + contadora;
    console.log(somaDosDivisores)
  }
}


if ((somaDosDivisores)==(numeroLido+1)){
  alert("O numero é primo.")
}
else {
  alert("O numero não é primo.")
}