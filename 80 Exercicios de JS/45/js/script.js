let contador = 0;
let primeiro = 0;
let segundo = 1;

while (contador < 20) {
    console.log(primeiro);
    let proximo = primeiro + segundo;
    primeiro = segundo;
    segundo = proximo;
    contador++;
}
