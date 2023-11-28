let nomeInserido,
  contadora,
  contadoraNomes,
  idadeInserida,
  acumulativoDasIdades;

contadoraNomes = 1;
contadora = 0;
acumulativoDasIdades = 0;

nomeInserido = prompt("Insira o nome do " + contadoraNomes + "° individuo");
do {
  idadeInserida = parseInt(prompt("Insira a idade do individuo: "));
  acumulativoDasIdades = acumulativoDasIdades + idadeInserida;
  console.log("acumulativo" + acumulativoDasIdades);
  contadora++;
  contadoraNomes++;
  console.log("contadora" + contadora);
  nomeInserido = prompt("Insira o nome do " + contadoraNomes + "° individuo");
} while (nomeInserido != "fim");

alert(
  "A média das idades é igual a:" + acumulativoDasIdades / contadora
);
