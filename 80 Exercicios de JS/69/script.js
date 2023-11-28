let contadora,numeroLido,somaDosNumeros, mediaAritimetica;

somaDosNumeros = 0

for (contadora=1;contadora<=5;contadora++){
numeroLido = parseInt(prompt("Insira aqui o seu " + contadora + "° numero: "))
  somaDosNumeros = somaDosNumeros + numeroLido
}

mediaAritimetica = somaDosNumeros / 5
alert("Media aritimetica é igual a: " + mediaAritimetica)

