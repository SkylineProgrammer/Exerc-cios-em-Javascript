let numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero) && numero > 0) {
    let somaPares = 0;
    let i = 2;

    while (i <= numero) {
        somaPares += i;
        i += 2;
    }

    alert("A soma dos números pares entre 1 e " + numero + " é: " + somaPares);
} else {
    alert("Por favor, insira um número inteiro válido e maior que 1.");
}
