let contador = 1;
let soma = 0;

while (contador <= 5) {
    let numero = parseInt(prompt("Digite o " + contador + "º número inteiro:"));
    
    if (!isNaN(numero)) {
        soma += numero;
        contador++;
    } else {
        alert("Por favor, insira um número inteiro válido.");
    }
}

if (contador > 1) {
    let media = soma / (contador - 1);
    alert("A média dos números lidos é: " + media.toFixed(2));
} else {
    alert("Nenhum número válido foi lido.");
}
