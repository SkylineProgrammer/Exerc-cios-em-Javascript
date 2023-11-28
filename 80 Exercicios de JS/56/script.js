let numeroInserido, contadora;

contadora = 1;

numeroInserido = parseInt(
  prompt("Insira o número para descobrir seus divisores: ")
);

do {
  if (numeroInserido % contadora == 0) {
    console.log(contadora + " é um divisor.");
    contadora++;
  } else {
    contadora++;
  }
} while (contadora <= numeroInserido);
