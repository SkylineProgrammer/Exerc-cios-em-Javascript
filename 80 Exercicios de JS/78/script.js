let numeroInteiroLido;

numeroInteiroLido = parseInt(prompt("Insira aqui o número:"));

for (;numeroInteiroLido>10;){
  console.log(numeroInteiroLido % 10);
  numeroInteiroLido = parseInt(numeroInteiroLido / 10);
  if (numeroInteiroLido < 10) {
    console.log(numeroInteiroLido);
  }
}



