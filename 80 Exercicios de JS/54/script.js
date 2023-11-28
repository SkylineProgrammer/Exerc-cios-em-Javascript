let numeroInserido, contadora, somaNumerosInseridos, mediaAritimetica;

somaNumerosInseridos = 0;

contadora = 1;

do {
  numeroInserido = parseInt(prompt("Insira o " + contadora + "° número."));
  somaNumerosInseridos = somaNumerosInseridos + numeroInserido;
  contadora++
} while (contadora <= 5);

mediaAritimetica = somaNumerosInseridos /(contadora-1);

alert("A média dos números é igual a: " + mediaAritimetica);
