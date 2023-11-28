let numero = parseInt(prompt("Digite um número inteiro:"));

if (!isNaN(numero) && numero > 1) {
    let divisor = 2;
    let ehPrimo = true;

    while (divisor < numero) {
        if (numero % divisor === 0) {
            ehPrimo = false;
            break;
        }
        divisor++;
    }

    if (ehPrimo) {
        alert(numero + " é um número primo.");
    } else {
        alert(numero + " não é um número primo.");
    }
} else {
    alert("Por favor, insira um número inteiro maior que 1.");
}
