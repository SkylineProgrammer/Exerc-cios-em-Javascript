let contadora, idade, nome, somaDeIdades, mediaIdades;

somaDeIdades = 0;

for (contadora = 1;contadora<=5;contadora++) {
  nome = prompt("Insira nome da " + contadora + "° pessoa:");
  idade = parseInt(
    prompt(nome + " registrada. Agora, por favor insira sua idade:")
  );
  somaDeIdades = somaDeIdades + idade;
}

mediaIdades = somaDeIdades / (contadora - 1);
alert("A média das 5 idades inseridas é igual a: " + mediaIdades);
