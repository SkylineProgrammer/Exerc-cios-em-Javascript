let acumulativoDosNumeros, numeroAtual;

acumulativoDosNumeros = 0;

numeroAtual = 1;

do {
  acumulativoDosNumeros = acumulativoDosNumeros + numeroAtual;
  console.log(acumulativoDosNumeros);
  numeroAtual++;
} while (numeroAtual <= 100);
