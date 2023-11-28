let numero = parseInt(prompt("Digite um número inteiro positivo:"));

if (!isNaN(numero) && numero > 0) {
    let divisor = 1;

    while (divisor <= numero) {
        if (numero % divisor === 0) {
            console.log("Divisor: " + divisor);
        }
        divisor++;
    }
} else {
    alert("Por favor, insira um número inteiro positivo válido.");
}
